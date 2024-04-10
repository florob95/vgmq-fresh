export default function Home() {
    return (
        <div>
            <header class='bg-black h-70'>
                <nav class='flex items-center justify-between'>
                    <img class='ml-6 mt-1'
                         src='/svg/vgmq.svg'
                         width='170'
                         height='48'
                    />
                    <div class='flex items-center'>
                        <button class='bg-[#000000] h-btn w-btn text-white mr-3'>Register</button>
                        <button>
                            <img class='rounded-lg'
                                 src='/svg/discord.svg'
                                 width='43'
                                 height='43'
                            />
                        </button>
                    </div>
                </nav>
            </header>
            <section id='login' class='flex items-center flex-col bg-black'>
                <h1 class='text-white text-8xl text-center'>VIDEO GAME</h1>
                <h1 class='text-white text-8xl text-center'>MUSIC QUIZ</h1>
                <form class='flex items-center justify-center flex-col'>
                    <input class='bg-grey text-center placeholder:text-white w-[400px] h-[53px] mt-8 mb-2 rounded-md'
                           type='text' placeholder='Username'></input>
                    <input class='bg-grey text-center placeholder:text-white w-[400px] h-[53px] rounded-md'
                           type='password' placeholder='Password'></input>
                    <button class='h-btn w-btn bg-lime mt-6'>Login</button>
                    <p class='text-white text-sm mt-5'>Forgot your password?</p>
                    <p class='text-white text-sm'>Don’t have account? <span class='text-[#59EE7F]'>Register Here</span>
                    </p>
                </form>
            </section>
            <section id='what-is' class='flex justify-center gap-4 bg-yellow'>
                <div class='max-w-[530px]'>
                    <h1 class='text-8xl text-[#000000] text-center'>what is</h1>
                    <img
                        src='/svg/vgmq.svg'
                        width='390'
                        height='135'
                    />
                </div>
                <div class='max-w-[530px]'>
                    <p class='leading-7'>
                        Quiz game about games music! Inspired by the popular “guess the opening/ending song” quizzes,
                        that are all about matching a set of game songc Quiz takes these quizzes one step further!
                        Thanks to the ever expanding community driven song database, an unlimited amount of unique
                        quizzes can be generated. Furthermore you can add your MyAnimeList account to have your quizzes
                        personalised by the anime you’ve watched, while still throwing in new and fresh anime for you to
                        discover!
                    </p>
                </div>
            </section>
            <section id='play' class='flex gap-4 justify-center bg-light-green'>
                <div
                    class='bg-black mt-20 text-white rounded-2xl max-w-[550px] h-[700px] shadow-[-40px_40px] shadow-yellow'>
                    <div class='flex flex-col justify-center h-full mx-8'>
                        <img
                            class='mb-10'
                            src='/svg/heart.svg'
                            width='80'
                            height='80'
                        />
                        <h1 class='text-7xl'>FREE TO PLAY</h1>
                        <p class='mt-10'>a quiz game about games music! Inspired by the popular “guess the
                            opening/ending song”
                            quizzes,
                            that are all about matching a set of game songc Quiz takes these quizzes one step further!
                            Thanks to the ever expandi1</p>
                    </div>
                </div>
                <div class='bg-black text-white rounded-2xl max-w-[550px] h-[700px] shadow-[40px_40px] shadow-lime'>
                    <div class='flex flex-col justify-center h-full mx-8'>
                        <img
                            class='mb-10'
                            src='/svg/user.svg'
                            width='80'
                            height='80'
                        />
                        <h1 class='text-7xl'>play with others</h1>
                        <p class='mt-10'>a quiz game about games music! Inspired by the popular “guess the
                            opening/ending song”
                            quizzes,
                            that are all about matching a set of game songc Quiz takes these quizzes one step further!
                            Thanks to the ever expandi1</p>
                    </div>
                </div>
            </section>
            <section id='games-number' class='bg-green'>
                <div class='flex justify-end'>
                    <div class='flex  flex-col items-center'>
                        <h2 class='font-bold text-7xl'>155+ GAMES</h2>
                        <p>a quiz game about games music! Inspired by the popular “guess the opening/ending song”</p>
                        <p>quizzes, that are all about matching a set of game songc Quiz takes these quiz</p>
                    </div>
                </div>
            </section>
            <section id='game-preview' class='bg-black'>
                <div class='text-white text-center'>Pour les images jaquettes va falloir faire du js</div>
            </section>
            <section id='join' class='bg-black flex flex-col items-center'>
                <h1 class='text-7xl text-white'>join now for free</h1>
                <button class='h-btn w-btn bg-lime mt-6'>Register</button>
            </section>
            <footer class='bg-[#000000] flex  items-center justify-start h-[80px]'>
                <p class='text-sm text-white ml-20'>All Rights Reserved VGMQ 2023</p>
            </footer>
        </div>
    )
}
