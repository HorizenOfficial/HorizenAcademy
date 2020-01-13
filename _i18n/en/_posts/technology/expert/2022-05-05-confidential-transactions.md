---
layout: post
type: article
title: "Confidential Transactions"
description: "The Horizen Academy is a free educational platform on blockchain technology, cryptocurrency, and privacy. This chapter is is not available yet. We add content frequently, sign up for our newsletter for notifications when it's released."
permalink: /technology/expert/confidential-transactions/
topic: technology
level: expert
chapter: "Privacy"
published: false
---

\url{https://medium.com/scalar-capital/behind-mimblewimble-cd9da78a00e9}\\

Part 1: \url{https://medium.com/@brandonarvanaghi/grin-transactions-explained-step-by-step-fdceb905a853}\\

Part 2: \url{https://medium.com/@brandonarvanaghi/whats-inside-a-grin-transaction-file-f062a0dcbf99}\\

\url{https://github.com/mimblewimble/grin/blob/master/doc/intro.md}\\

Range Proofs (Bulletproofs Paper) \url{https://eprint.iacr.org/2017/1066.pdf}\\

Presentation Andrew Poelstra at SF Bitcoin Dev Meetup \url{https://www.youtube.com/watch?v=aHTRlbCaUyM}\\

Signature Scheme vs Proof Scheme (???), commitment scheme \url{https://en.wikipedia.org/wiki/Commitment_scheme}\\

MimbleWimble Protocol.\\

Pederson Commitment essential building block. Based on Adam Back proposal for homomorphic values\footnote{\url{https://bitcointalk.org/index.php?topic=305791.0}} $\to$ Gregory Maxwell Confidential Transactions\footnote{\url{https://elementsproject.org/features/confidential-transactions/investigation}}\\

Pederson Commitment replaces UTXO and allows validation without knowing values, blinding factor introduction. two phases: commit, reveal\\

Receiver chooses blinding factor but communicates it as a public key, so in the form of a product $sk_r \cdot G$. Ref to ECC math. Convention of small and capital letters\\

Conveniently blinding factor can also be used to prove ownership\\

To close a loophole that would permit inflation in case negative output values were possible *Range Proofs* used (more specifically Bulletproofs, a type of zero knowledge proof)\\

Both implementations use **Dandelion**\\


\subsubsection{Proof Systems}

see Stark Section (already some snippets worked out)\\
help scaling: verification based on proofs instead of repetition\\
privacy\\

\subsubsection{What is a Confidential Transaction?}

hidden amount, privacy benefit especially in combination with Mixing.

 It uses a Pedersen Commitment scheme which replaces plaintext unspent transaction outputs (UTXOs) values with cryptographic commitments.\\
 
  Pedersen commitments follow the additive homomorphic property and therefore allow us to check that the sum of the inputs equals the sum of the outputs within a transaction. \\
  
The range proof is actually the largest part of a CT output, but is essential for ensuring the money supply does not undergo significant inflation.\\



\subsubsection{Protocol using CTs}

Protocol: MimbleWimble\\

“Mimblewimble, which prevents your opponent from accurately casting their next spell.” - Gilderoy Lockhart\\

Grins proposed by dev also using harry potter names. pseudonymous author Tom Elvis Jedusor (Voldemort's real name in the French Harry Potter). Another pseudonymous developer with a name from the Harry Potter universe, Ignotus Peverell, is leading the development of Grin, an open source grassroots effort not dissimilar to Bitcoin itself.\\

Implementations: Beam/Grin, ref grin mythical fair launch article for those interested\\

"Another project, Beam, has taken an approach more similar to Zcash, with a formally organized company and a founders reward to fund development and reward the creators. Beam is led by Alexander Zaidelson, an entrepreneur based in Israel."\\

mimble/monero based on same cryptographic primitives as bitcoin, discrete log problem and cryptographic hashing. combination of simple primitives in sophisticated ways, system complex but elegant at it's core.\\

additional concept: homomorphic encryption. "Thus, fully homomorphic encryption systems include tremendous overhead and are quite slow. However, we can get quite interesting results with systems that are merely additively homomorphic. Additively homomorphic meaning that addition and subtraction are preserved over encrypted values."\\

\subsubsection{A MimbleWimble Transaction}

Ref to PKC Article\\

"Interestingly, the system does away with addresses, and instead outputs are actually commitments that can only be spent by people with knowledge of a particular parameter used to create the commitment. This parameter is known as a blinding factor and was originally included in Confidential Transactions purely for privacy. In a clever modification, MimbleWimble uses the blinding factor as the private key that authorizes the spending of an output. These blinding factors are now fundamental to authentication, and must not be shared." - behind mimble\\

Short recap of the single-most important takeaway from that article:\\
 
Multiplying the private key $sk_s$ with the generator point $H$ on the curve yields the corresponding public key $PK_s$.

\begin{align}
H \cdot sk_s = PK_s
\end{align}

Can't compute sk from PK.\\

This property is used twice, once to obfuscate the value transferred, and second, to prove ownership based on the knowledge of a blinding factor, but we are getting ahead of ourselves.\\

\textbf{A MimbleWimble Transaction includes}
\begin{itemize}
\item A set of inputs referencing and spending a set of previous outputs
\item A set of new outputs that each include:
\item A value $v$ and a blinding factor $sk_r$, each multiplied with a generator point and summed to give $(sk_r \cdot G + v \cdot H)$
\item A range proof that shows v is a positive number
\item A public transaction fee
\item A signature, computed based on the excess blinding key value (outputs (+fee) - inputs) used as a private key.
\end{itemize}

Dissect this one by one, starting with inputs and outputs, pederson commitment and blinding factor.\\

Next, close a specific loophole: range proof\\

Although signature covered before, here slight variation regarding keys used\\

\subsubsection{Pederson Commitment}

Hidden values, so inputs/outputs must be "encrypted" in some way -> pederson\\

A *Pederson Commitment* in a Grin input or output will always have the form.\\

blinding factor often referred to as $r$. Because we want to be consistent within Academy and it has function very similar to private key that we always denoted $sk$ we refer to it as $sk_r$.\\

\begin{align}
... (sk_{r, i} \cdot G) + (v_i \cdot H) ...
\end{align}

where $sk_{r,i}$ is the blinding factor and $v_i$ is the amount (value) of the input/output $i$. In order to spend an output, one must know both, $sk_{r, i}$ and $v_i$. The \textbf{goal of this first concept} is to allow the verification of a transaction without knowing the actually transferred values.\\

values, indices i, o for input/output. numbers continuous inputs AND outputs

\textbf{Simple TX 1 in/1 out}\\

\begin{align}
(sk_{r,1} \cdot G) + (v_{i,1} \cdot H)  = (sk_{r,2} \cdot G) + (v_{o,2} \cdot H)
\end{align}

Implies two (useful) things:\\

values add up\\

\begin{align}
v_{o} - v_{i} = 0
\end{align}

validation without values. homomorphic encryption.\\

\subsubsection{Alice to Bob}

Alice wants to spend an output of 3 coins. All of them to bob. For now let's consider the TX is being sent and we find the following \textbf{output} (not transaction) somewhere on the blockchain:

\begin{align}
X = 22 \cdot G + 3 \cdot H
\end{align}

X is what you will find on the blockchain, the public Pederson Commitment.\\

3 is the amount and known by both, Alice and Bob.\\

22 is the blinding factor chosen and only known by Bob.\\

Bob wants to spend X, so it needs to be unlocked somehow.\\

\subsubsection{Bob to Carol 1.0}

First let's assume he wants to spend all three coins at once, simple TX 1 in 1 out (let's forget about TX fee for now)\\

Carols picks a blinding factor $sk_r$ and computes a public key ($sk_r \cdot G$ ) that she communicates to Bob. If she would tell him her blinding key he could spend her funds later on.\\

Let's say Carol picks 66 as her blinding factor.\\

we know each input/output has the form of PDC.\\

Bobs output (created by alice) that he now uses as input (he knows the 22 protecting his output)

\begin{align}
X_i = 22 \cdot G + 3 \cdot H
\end{align}

Output, created by bob, but belonging to Carol later on

\begin{align}
Y_o = 66 \cdot G + 3 \cdot H
\end{align}

The entire TX now has the form outputs - inputs

\begin{align}
Y_o - X_i = (66 \cdot G + 3 \cdot H) - (22 \cdot G + 3 \cdot H) = (44 \cdot G + 0 \cdot H)
\end{align}

$44 \cdot G$ is only a valid pub key on curve (with the corresponding secret key 44), if values cancel out to zero. (whole bracket published as one. if $v$ not zero, than the latter term contributes to  it and you can tell it's not a multiple of G)\\

v must equal zero, otherwise coins would be created out of thin air\\

In order for a node on the network or, more generally speaking, the protocol to verify TX two things must be ensured:

\begin{itemize}
\item $Y_o - X_i$ yields a valid public key (commitment - commitment = pubkey)
\item transacting parties know secret key (44). If they can prove knowledge of x (44) corresponding to pubkey $44 \cdot G$ y must be zero
\end{itemize}

Differentiate between output we talked about in the very beginning (Commitment $X = 22 \cdot G + 3 \cdot H$ and the result of input-output (\textbf{called what???}))\\

And how does one prove knowledge of x without revealing it? **Digital Signatures**\\

Additionally to in/out \textit{Transaction Kernel}. Contains Signature, TX fees in plain, and some other data.\\

kernell excess (Pederson commitment to zero)\\

transaction signature (using kernel excess as public key)\\

\begin{table}[H]
\caption{Simple Transaction from Bob to Carol}
\centering
\begin{tabular}{|ll|}
\hline
\textbf{Inputs} & \textbf{Outputs}\\
&\\
$X_i$ (${\color{gray} 22 \cdot G + 3 \cdot H}$) & $Y_o$ (${\color{gray} 66 \cdot G + 3 \cdot H}$)\\
&\\
\textbf{Transaction Kernel} & \\
&\\
Signature (${\color{gray} \text{based on sk } 44}$)&\\
Transaction Fees &\\
Other Data&\\
\hline
\end{tabular}
\end{table}

\subsubsection{Bob to Carol 2.0}

Only send 2, 1 as change.

first, Bob generates a new private key/blinding factor (11)\\

Tx now has two outputs. The output to carol

\begin{align}
Y_{o, 1} = (66 \cdot G + 2 \cdot H)
\end{align}

and the change back to himself

\begin{align}
Y_{o, 2} = (11 \cdot G + 1 \cdot H)
\end{align}

All together $(Y_{o, 1} + Y_{o, 2}) - X_i$

\begin{align}
((66 \cdot G + 2 \cdot H) + (11 \cdot G + 1 \cdot H) - (22 \cdot G + 3 \cdot H) = (55 \cdot G + 0 \cdot H)
\end{align}

What ends up on the blockchain is very similar to what we had before. Signature of the TX is build with the excess value,  this example.

\begin{table}[H]
\caption{Simple Transaction from Bob to Carol}
\centering
\begin{tabular}{|ll|}
\hline
\textbf{Inputs} & \textbf{Outputs}\\
&\\
$X_i$ (${\color{gray} 22 \cdot G + 3 \cdot H}$) & $Y_{o,1}$ (${\color{gray} 66 \cdot G + 2 \cdot H}$)\\
& $Y_{o,2}$ (${\color{gray} 11 \cdot G + 1 \cdot H}$)\\
&\\
\textbf{Transaction Kernel} & \\
&\\
Signature (${\color{gray} \text{based on sk } 55}$)&\\
Transaction Fees &\\
Other Data&\\
\hline
\end{tabular}
\end{table}

\subsubsection{Range Proofs}

There would be a loophole. With negative outputs you could balance the equation so the value adds up to zero. e.g. 3 input, -3 and 6 as output\\

Because $-3 \cdot H$ would be indistinguishable from another, valid point on the curve we need an auxiliary construction: range proofs. Prove, that value is within given range, positive integers in this case.\\

The implementation used in Grin is Bulletproofs\footnote{\url{https://eprint.iacr.org/2017/1066.pdf}}, a type of non-interactive zero-knowledge proof, with small proof size and without trusted setup.\\

To create a valid range proof, the blinding factors must be known (66 and 22). refer to paper for an explanation. \textbf{how would bob know 113 (66), thats carols secret factor? maybe only need to know 113*G }\\

"We've explained above how MimbleWimble transactions can provide strong anonymity guarantees while maintaining the properties required for a valid blockchain, i.e., a transaction does not create money and proof of ownership is established through private keys."\\

\subsubsection{Transaction Aggregation}

tx is signed and signature included in tx kernel. "The signature is generated using the kernel excess as a public key proving that the transaction sums to 0."\\

public key in example above is $55 \cdot G$.\\

For any valid Transaction we can say:

\begin{align}
\text{sum}(\text{outputs}) - \text{sum}(\text{inputs}) = \text{kernel\_excess}
\end{align}

Because a block is just a number of transactions grouped together, each consisting of inputs and outputs we can also say for a block 

\begin{align}
\text{sum}(\text{outputs}) - \text{sum}(\text{inputs}) = \text{sum(}\text{kernel\_excess})
\end{align}

This means that if we ignore TX fees, a MimbleWimble block is equivalent to a MimbleWimble transaction.\\

CoinJoin suffers from being interactive and making it non interactive is difficult. OWAS - one-way aggregate signatures by buterin\footnote{\url{https://medium.com/@VitalikButerin/exploring-elliptic-curve-pairings-c73c1864e627}}. If you hear about signature aggregation, thats what it's good for.\\

Kernel Offset to prevent reconstruction of transactions by matching inputs with outputs\\

"all transaction structure has been eliminated and the order of inputs and outputs does not matter anymore. "\\

Block is simply build from list of inputs remaining after cut through, the list of outputs remaining after cut through, the kernel offset and the transaction kernels for each tx.\\

transaction kernel comprises the public key $sk_r \cdot G$ resulting from the summation of all commitments, the signature generated using the excess value and the mining fee.\\

"The range proof is actually the largest part of a CT output, but is essential for ensuring the money supply does not undergo significant inflation."\\


\subsubsection{Cut-through}

sometimes an output created in a tx is spend in a new tx within the same block.\\

" all that needs to be checked in a block is that ownership has been proven (which comes from transaction kernels) and that the whole block did not add any money supply (other than what's allowed by the coinbase)."\\

Concept can even be extended beyond blocks: "Generalizing, we conclude that the chain state (excluding headers) at any point in time can be summarized by just these pieces of information”\\


\begin{enumerate}
\item The total amount of coins created by mining in the chain. Can be deduced from block height.
\item The complete set of unspent outputs.
\item The transactions kernels for each transaction.
\end{enumerate}

Conclusion Github: "In this document we covered the basic principles that underlie a MimbleWimble blockchain. By using the addition properties of Elliptic Curve Cryptography, we're able to build transactions that are completely opaque but can still be properly validated. And by generalizing those properties to blocks, we can eliminate a large amount of blockchain data, allowing for great scaling and fast sync of new peers."\\






















\newpage
\subsubsection*{Schnorr Challenge}

\url{https://medium.com/@brandonarvanaghi/grin-transactions-explained-step-by-step-fdceb905a853}\\

The Schnorr Challenge $e$ for the transaction is

\begin{align}
e = SHA256( M | k_s \cdot G + k_r \cdot G | r_s \cdot G + r_r \cdot G)
\end{align}

\begin{align}
e = SHA256( M | (k_s + k_r) \cdot G | (r_s + r_r) \cdot G)
\end{align}


The Schnorr Signature $s_r$ is

\begin{align}
s_r = k_r + e \cdot r_r
\end{align}

Some method to prevent double spending needs to be in place. With bitcoin this is verified in a straight forward fashion. When amounts are hidden this becomes a bit more tricky.

\begin{table}[h]
\caption{Zeichenerklärung}
\centering
\begin{tabular}{|l|l|}
\hline
H & fixed point on the curve\\
G & fixed point on the curve\\
k & private key\\
r & privake key used as blinding factor\\
$P_k$ & public key derived from k\\
$P_j$ & public key derived from j\\
v & value of an input or output\\
e & Schnorr Challenge for the Transaction\\
\hline
\end{tabular}
\end{table}


\subsubsection*{FR}


\subsubsection*{Summary}
