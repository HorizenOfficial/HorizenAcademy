// Copies a BMP file

#include <stdio.h>
#include <stdlib.h>
#include <math.h>

#include "bmp.h"

int main(int argc, char *argv[])
{
    // ensure proper usage
    if (argc != 4)
    {
        fprintf(stderr, "Usage: resize factor infile outfile\n");
        return 1;
    }

    //remember filenames
    char *infile = argv[2];
    char *outfile = argv[3];

    //initialize factor from input
    float factor = atof(argv[1]);

    // open input file
    FILE *inptr = fopen(infile, "r");
    if (inptr == NULL)
    {
        fprintf(stderr, "Could not open %s.\n", infile);
        return 2;
    }

    // open output file
    FILE *outptr = fopen(outfile, "w");
    if (outptr == NULL)
    {
        fclose(inptr);
        fprintf(stderr, "Could not create %s.\n", outfile);
        return 3;
    }

    // read infile's BITMAPFILEHEADER
    BITMAPFILEHEADER bf;
    fread(&bf, sizeof(BITMAPFILEHEADER), 1, inptr);

    // read infile's BITMAPINFOHEADER
    BITMAPINFOHEADER bi;
    fread(&bi, sizeof(BITMAPINFOHEADER), 1, inptr);

    // ensure infile is (likely) a 24-bit uncompressed BMP 4.0
    if (bf.bfType != 0x4d42 || bf.bfOffBits != 54 || bi.biSize != 40 ||
        bi.biBitCount != 24 || bi.biCompression != 0)
    {
        fclose(outptr);
        fclose(inptr);
        fprintf(stderr, "Unsupported file format.\n");
        return 4;
    }

    // determine padding for scanlines (for reading)
    int padding = (4 - (bi.biWidth * sizeof(RGBTRIPLE)) % 4) % 4;

    // determine new padding (for writing)
    int padding_new = (bi.biWidth * factor);
    padding_new = (4 - (padding_new * sizeof(RGBTRIPLE)) % 4) % 4;

    //remember original size
    int width0 = bi.biWidth;
    int height0 = abs(bi.biHeight);

    //Changes to header files
    bi.biWidth = bi.biWidth * factor;
    bi.biHeight = bi.biHeight * factor;
    bi.biSizeImage = ((sizeof(RGBTRIPLE) * bi.biWidth) + padding_new) * abs(bi.biHeight);
    bf.bfSize = (54 + bi.biSizeImage);

    // write outfile's BITMAPFILEHEADER
    fwrite(&bf, sizeof(BITMAPFILEHEADER), 1, outptr);

    // write outfile's BITMAPINFOHEADER
    fwrite(&bi, sizeof(BITMAPINFOHEADER), 1, outptr);


    //ROWS iterate over infile's scanlines
    for (int i = 0; i < height0; i++)
    {
        //printing the same row (i) several times before moving to the next "template" line
        //if factor < 1 this loop is not triggered
        for (int j = 0; j < (factor - 1); j++)
        {
            //for each coloumn (k) from infile: read and write n times
            for (int k = 0; k < width0; k++)
            {
                // temporary storage
                RGBTRIPLE triple;

                // read RGB triple from infile
                fread(&triple, sizeof(RGBTRIPLE), 1, inptr);

                // write RGB triple to outfile n times
                for (int l = 0; l < factor; l++)
                {
                    fwrite(&triple, sizeof(RGBTRIPLE), 1, outptr);
                }

            }

            // write outfile padding (padding_new)
            for (int k = 0; k < padding_new; k++)
            {
                fputc(0x00, outptr);
            }

            //send cursor back
            fseek(inptr, -(sizeof(RGBTRIPLE) * width0), SEEK_CUR);

        }

        //for each coloum of pixels from infile --> last copy of same row before moving on to next one
        for (int j = 0; j < width0; j++)
        {
            // temporary storage
            RGBTRIPLE triple;

            // read RGB triple from infile
            fread(&triple, sizeof(RGBTRIPLE), 1, inptr);

            // write RGB triple to outfile
            if (factor >= 1)
            {
                for (int k = 0; k < factor; k++)
                {
                    fwrite(&triple, sizeof(RGBTRIPLE), 1, outptr);
                }
            }

            //decreasing size
            if (factor < 1)
            {
                fwrite(&triple, sizeof(RGBTRIPLE), 1, outptr);
                fseek(inptr, (sizeof(RGBTRIPLE) * ((1 / factor) - 1)), SEEK_CUR);
                j = j + ((1 / factor) - 1);
            }

        }

        // write outfile padding (padding_new)
        for (int j = 0; j < padding_new; j++)
        {
            fputc(0x00, outptr);
        }

        // skip over padding (reading part)
        fseek(inptr, padding, SEEK_CUR);

        if (factor < 1)
        {
            fseek(inptr, ((sizeof(RGBTRIPLE) * width0) + padding), SEEK_CUR);
            i = i + ((1 / factor) - 1);
        }

    }

    // close infile
    fclose(inptr);

    // close outfile
    fclose(outptr);

    // success
    return 0;
}
