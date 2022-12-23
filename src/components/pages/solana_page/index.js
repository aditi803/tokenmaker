import {useState} from "react"
const Solana = () => {


    // const onClick = useCallback(async (form) => {

    //     //getMinimumBalanceForRentExemptMint returns amount of lamports required
    //     const lamports = await getMinimumBalanceForRentExemptMint(connection);

    //     const mintKeypair = Keypair.generate(); // keypair.generate used to create a new account for each newly created token
    //     const metadataPDA = await findMetadataPda(mintKeypair.publicKey);

    //     //getAssociatedTokenAddress returns address of the associated token account
    //     const tokenATA = await getAssociatedTokenAddress(mintKeypair.publicKey, publicKey)
    //     const tokenMetadata = {
    //         name: form.tokenName,
    //         symbol: form.symbol,
    //         uri: form.metadata,
    //         sellerFeeBasisPoints: 0,
    //         creators: null,
    //         collection: null,
    //         uses: null
    //     } as DataV2;

    //     // Transaction defnes the order that instruction exist in a transaction determines the order they are executed
    //     const createNewTokenTransaction = new Transaction().add(
    //         SystemProgram.createAccount({
    //             fromPubkey: publicKey,
    //             newAccountPubkey: mintKeypair.publicKey,
    //             space: MINT_SIZE, // returns the byte length of a mint 
    //             lamports: lamports,
    //             programId: TOKEN_PROGRAM_ID, // returns address of the spl token

    //         }),
    //         // instruction to add to a transaction
    //         createInitializeMintInstruction(
    //             mintKeypair.publicKey,
    //             form.decimals,
    //             publicKey,
    //             publicKey,

    //             TOKEN_PROGRAM_ID), // return the address of the spl token program

    //         // instruction to add to a transaction
    //         createAssociatedTokenAccountInstruction(
    //             publicKey,
    //             tokenATA,
    //             publicKey,
    //             mintKeypair.publicKey,
    //         ),

    //         //
    //         createMintToInstruction(
    //             mintKeypair.publicKey,
    //             tokenATA,
    //             publicKey,
    //             form.amount * Math.pow(10, form.decimals),
    //         ),
    //         createCreateMetadataAccountV2Instruction({
    //             metadata: metadataPDA,
    //             mint: mintKeypair.publicKey,
    //             mintAuthority: publicKey,
    //             payer: publicKey,
    //             updateAuthority: publicKey,
    //         },
    //             {
    //                 createMetadataAccountArgsV2:
    //                 {
    //                     data: tokenMetadata,
    //                     isMutable: true
    //                 }
    //             }
    //         )
    //     );
    //     await sendTransaction(createNewTokenTransaction, connection, { signers: [mintKeypair] });
    // }, [publicKey, connection, sendTransaction]);


    return (
        <>
            <div className="page-content">
                <main>
                    <div className="hero-form mb-3">
                        <div className="container">
                            <h1>
                                <span className="sub-highlight ">
                                    Create Your Solana Token
                                </span>
                            </h1>
                            <p style={{ color: 'black' }}>
                                Easily deploy your Smart Contract for a Standard, Capped,
                                Mintable, Burnable BEP20 Token.
                                <br />
                                No login. No setup. No Coding required.
                            </p>
                        </div>
                    </div>
                </main>
                <section className='container'>
                    <div className="my-6">
                        <label className='m-2'>Token Name</label>
                        <input
                            type="text"
                            className="form-control block mb-2 w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Token Name"
                        // onChange={(e) => setTokenName(e.target.value)}
                        />
                        <label className='my-2'>Symbol</label>
                        <input
                            type="text"
                            className="form-control block mb-2 w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Symbol"
                        // onChange={(e) => setSymbol(e.target.value)}
                        />
                        <label className='my-2'>Metadata Url</label>
                        <input
                            type="text"
                            className="form-control block mb-2 w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Metadata Url"
                        // onChange={(e) => setMetadata(e.target.value)}
                        />
                        <label className='my-2'>Amount</label>
                        <input
                            type="number"
                            className="form-control block mb-2 w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Amount"
                        // onChange={(e) => setAmount(e.target.value)}
                        />
                        <label className='my-2'>Decimals</label>
                        <input
                            type="number"
                            className="form-control block mb-2 w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Decimals"
                        // onChange={(e) => setDecimals(e.target.value)}
                        />

                        <button
                            className="px-8 m-2 btn animate-pulse bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ..."
                            // onClick={() => onClick({decimals: Number(decimals), amount: Number(amount), metadata: metadata, symbol: symbol, tokenName: tokenName})}
                            color='success'
                        >
                            <span>Create Token</span>
                        </button>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Solana