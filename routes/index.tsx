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
                    <input
                        class='bg-grey text-center placeholder:text-white w-[300px] md:w-[400px] h-[53px] mt-8 mb-2 rounded-md'
                        type='text' placeholder='Username'></input>
                    <input class='bg-grey text-center placeholder:text-white w-[300px] md:w-[400px] h-[53px] rounded-md'
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
            <section id='play' class='flex flex-col md:flex-row gap-4 justify-center bg-light-green'>
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
                        <svg class='text-yellow mt-4' width="268" height="30" viewBox="0 0 268 28" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0L130.606 0L118.34 27.412H0V0Z" fill="currentColor"/>
                            <path d="M146.652 0H189.107L176.841 27.412H134.386L146.652 0Z" fill="currentColor"/>
                            <path d="M201.476 0H224.542L212.276 27.412H189.21L201.476 0Z" fill="currentColor"/>
                            <path d="M236.911 0H249.177L236.911 27.412H224.645L236.911 0Z" fill="currentColor"/>
                            <path d="M261.649 0H268L255.734 27.412H249.383L261.649 0Z" fill="currentColor"/>
                        </svg>
                        <p class='mt-10'>a quiz game about games music! Inspired by the popular “guess the
                            opening/ending song”
                            quizzes,
                            that are all about matching a set of game songc Quiz takes these quizzes one step further!
                            Thanks to the ever expandi1</p>
                    </div>
                </div>
                <div
                    class='bg-black text-white rounded-2xl max-w-[550px] h-[700px] shadow-[40px_40px] shadow-lime md:mt-0 mt-8'>
                    <div class='flex flex-col justify-center h-full mx-8'>
                        <img
                            class='mb-10'
                            src='/svg/user.svg'
                            width='80'
                            height='80'
                        />
                        <h1 class='text-7xl'>play with others</h1>
                        <svg class='text-lime mt-4' width="268" height="30" viewBox="0 0 268 28" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0L130.606 0L118.34 27.412H0V0Z" fill="currentColor"/>
                            <path d="M146.652 0H189.107L176.841 27.412H134.386L146.652 0Z" fill="currentColor"/>
                            <path d="M201.476 0H224.542L212.276 27.412H189.21L201.476 0Z" fill="currentColor"/>
                            <path d="M236.911 0H249.177L236.911 27.412H224.645L236.911 0Z" fill="currentColor"/>
                            <path d="M261.649 0H268L255.734 27.412H249.383L261.649 0Z" fill="currentColor"/>
                        </svg>
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
            <section id='game-preview' class='flex flex-col bg-black gap-4'>
                <div class='flex gap-4 overflow-hidden mx-4 justify-center'>
                    <img width='240px' height='340px' src='/img/a_way.png'/>
                    <img width='240px' height='340px' src='/img/ac.png'/>
                    <img width='240px' height='340px' src='/img/ace_combat.png'/>
                    <img width='240px' height='340px' src='/img/advance_war.png'/>
                    <img width='240px' height='340px' src='/img/age_myth.png'/>
                    <img width='240px' height='340px' src='/img/age_of.png'/>
                </div>
                <div class='flex gap-4 mx-8 overflow-hidden justify-center'>
                    <img width='230px' height='340px' src='/img/amnesia.png'/>
                    <img width='230px' height='340px' src='/img/among_us.png'/>
                    <img width='230px' height='340px' src='/img/arknights.png'/>
                    <img width='230px' height='340px' src='/img/borderlands.png'/>
                    <img width='230px' height='340px' src='/img/call_of.png'/>
                    <img width='230px' height='340px' src='/img/total_war.png'/>
                </div>
            </section>
            <section id='join' class='bg-black flex flex-col items-center'>
                <h1 class='text-7xl text-white text-center'>join now for free</h1>
                <button class='h-btn w-btn bg-lime mt-6'>Register</button>
            </section>
            <footer class='bg-[#000000] flex  items-center justify-start h-[80px]'>
                <p class='text-sm text-white ml-20'>All Rights Reserved VGMQ 2023</p>
            </footer>
        </div>
    )
}
