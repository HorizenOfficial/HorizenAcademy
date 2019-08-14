## How to fix the Horizen Academy Content

Although we spend quite some time on proofreading our content, sometimes you just miss a typo or a link you wanted to add.
Instead of telling us about it via mail or Discord, you can just go ahead and fix the error yourself if you like.

This does not only make the whole process a bit easier on us, but is also a great way to find out how GitHub works first hand!
If you are submitting code or editing a text file - the process remains the same.

## So, let's get going:

1) Go to https://github.com/ZencashOfficial and find the Horizen Academy Repository.

![Step 1](/assets/post_files/guides/fix_academy_content1.png)

2) All articles are in the `_i18n` folder

![Step 2](/assets/post_files/guides/fix_academy_content2.png)

3) Select the correct language. English is `en` and so on.

![Step 3](/assets/post_files/guides/fix_academy_content3.png)

4) Select `_posts`

![Step 4](/assets/post_files/guides/fix_academy_content4.png)

5) Select the topic the article you want to correct is in. Next, you choose the level, and lastly, the article that you want to fix. Let’s assume we want to add a missing link to an article in the technology section for advanced readers. We found a missing link in the Atomic Swaps article. 

![Step 5](/assets/post_files/guides/fix_academy_content5.png)

6) At the top of the document you can verify you found the correct article. At the very top of the document area, you will find the edit button - a little pencil icon.

![Step 6](/assets/post_files/guides/fix_academy_content6.png)


7) Now two things happen. You won’t have direct write access to the article, so GitHub creates a *fork* of this project for you. This means GitHub creates a copy of the project in your personal repository. What you are editing now is your personal copy of the Academy content.
At the same time, the editing mode is opened. You can now edit the text. If you are just fixing a typo you can just do so and proceed with step 10. 
We want to add a link though. So there is a little extra explanation. 

![Step 7](/assets/post_files/guides/fix_academy_content7.png)


8) The missing link we found looks like this. The ID in brackets is a reference to the working title of the article we want to include a link to. The context tells us clearly what article we want to reference: the article on public-key cryptography.

![Step 8](/assets/post_files/guides/fix_academy_content8.png)


9) All Academy articles are written in [Markdown](https://guides.github.com/features/mastering-markdown/). You can see this by the file extension `.md` of each article. In markdown, links generally have the format `[text with link](URL)`. This is how we created the link above to GitHub’s markdown guide: `[Markdown](https://guides.github.com/features/mastering-markdown/)`. So now we put the text we want to create a hyperlink from in square brackets and add the link to the public-key cryptography article in regular brackets (without space in between!). 

![Step 9](/assets/post_files/guides/fix_academy_content9.png)


10) Once you are done editing, you can use the preview function to check if everything went well.

![Step 10](/assets/post_files/guides/fix_academy_content10.png)


11) In preview mode, GitHub will place a yellow bar next to the section you edited, mark text you removed red, and highlight new text green. In this case, we removed the article ID `(TI2.3)`and can see that the link is working by it being blue. We can even click it to be sure.

![Step 11](/assets/post_files/guides/fix_academy_content11.png)

12) Now you have only made a change to your personal copy of this article, but you would like us to implement this change on our website. 
You have to scroll to the bottom to propose a change. You should give your commit a succinct title (the commit message) and maybe add a short description. Lastly, you can propose the file change.

![Step 12](/assets/post_files/guides/fix_academy_content12.png)

13) The last step is creating a *pull request*. This means you are requesting the repository maintainer to “pull” the update out of your personal copy of the article. You will be shown a summary of the changes you made. The red box is the old version and the green box is the new version. Additionally, GitHub confirms that the two branches (your personal branch and the official branch) can be *merged* - or combined - automatically. You can now click `Create pull request`.

![Step 13](/assets/post_files/guides/fix_academy_content13.png)

14) After you confirm your commit message and commit description, the very last step on your end is clicking `Create pull request` once more. You have probably just submitted your very first pull request (PR), to an open-source project! Congrats!

![Step 14](/assets/post_files/guides/fix_academy_content14.png)

15) You will now be told, that a review is required for your PR to be merged. For more complex changes, e.g. adding an entire section, reviewers might comment below on your proposed changes.
You will be notified once there is a comment or the change goes live. And you can always leave a star for the project, the GitHub equivalent of a like.
If you realize last minute that you made a mistake, you can close the pull request yourself.

![Step 15](/assets/post_files/guides/fix_academy_content15.png)

## Thanks for helping us out!

🙏🙏🙏
