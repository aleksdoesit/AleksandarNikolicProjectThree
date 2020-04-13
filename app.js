const characters = {
    character1: {
        name: 'Hank Scorpio',
        firstAppearance: `Season 08 Episode 02 - "You Only Move Twice"`,
        trivia: 'Hank came about as a fusion between eccentric billionaire Richard Branson and a James Bond villain.',
        quote: `"Hey, Homer, what's your least favorite country, Italy or France?" `,
        playedBy: `<a href='https://www.imdb.com/name/nm0000983/'>Albert Brooks</a>`,
        profileImage: `<img src="assets/Hank_Scorpio.png" alt="Hank Scorpio holding his patented flamethrower">`,
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/6w_MfOb0vtc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    character2: {
        name: 'Mindy Simmons',
        firstAppearance: `Season 05 Episode 09 - "The Last Temptation of Homer"`,
        trivia: 'Mindy is actually the first female employee hired at the Springfield Nuclear Powerplant.',
        quote: `"Homer, I've got a really wicked idea that could get us in a lot of trouble ... No. Let's do it. Let's call room service!"`,
        playedBy: `<a href="https://www.imdb.com/name/nm0000201/">Michelle Pfeiffer</a>`,
        profileImage: `<img src="assets/Mindy_Simmons.png" alt="Mindy enjoying the thinks she likes most - beer and donuts">`,
        video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/d5MPsVUumgQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    character3: {
        name: 'Frank Grimes',
        firstAppearance: `Season 08 Episode 23 - "Homer's Enemy"`,
        trivia: `Frank Grimes is an amalgam of Michael Douglas in <em>Falling Down</em> and an impression of a frustrated and flustered William H. Macy.`,
        quote: `"You idiot! You nearly drank a beaker full of sulfuric acid!"`,
        playedBy: `<a href="https://www.imdb.com/name/nm0000279/">Hank Azaria</a>`,
        profileImage: `<img src="assets/Frank_Grimes.webp" alt="Frank mean mugging as usual">`,
        video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/axHoy0hnQy8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    character4: {
        name: 'Laura Powers',
        firstAppearance: `Season 04 Episode 08 - "New Kid on the Block"`,
        trivia: `This episode contains a lot of firsts; Bart's first heartbreak and our introduction to "The Frying Dutchman" owner Captain Horatio McCallister`,
        quote: `"Hello I'd like to speak to Mrs. Tinkle, first name, (Bart whispers to Laura) Ivana."`,
        playedBy: `<a href="https://www.imdb.com/name/nm0004960/">Sara Gilbert</a>`,
        profileImage: `<img src="assets/Laura_Powers.png" alt="">`,
        video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/CvhfovvCYtE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    character5: {
        name: 'Leon Kompowsky',
        firstAppearance: `Season 03 Episode 01 - "Stark Raving Mad"`,
        trivia: `Michael Jackson voiced Leon credited under the pseudonym John Jay Smith, however due to contractual reasons the singing parts went to sound-a-like Kipp Lennon.`,
        quote: `Leon: "Hi, I'm Michael Jackson, from the Jacksons." Homer: "I'm Homer Simpson, from the Simpsons."`,
        playedBy: `<a href="https://www.imdb.com/name/nm0001391/">Michael Jackson</a> and <a href="https://www.imdb.com/name/nm0502054/">Kipp Lennon</a>`,
        profileImage: `<img src="assets/Leon_Kompowsky.png" alt="">`,
        video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/RLuyHWP_wnM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    character6: {
        name: 'John',
        firstAppearance: `Season 08 Episode 15 - "Homer's Phobia"`,
        trivia: `John is played by cult counter-culture director John Waters and is similarly eccentric and hilarious. He can be seen sporting Homer's famous "Pin Pals" bowling shirt from the previous season.`,
        quote: `"Well, now you don't get any candy. No that's cruel. Just take a teensy piece."`,
        playedBy: `<a href="https://www.imdb.com/name/nm0000691/">John Waters</a>`,
        profileImage: `<img class="johnPic" src="assets/John.png" alt="John sporting his patented and dapper moustache">`,
        video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/C76tpMGY--M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    character7: {
        name: 'Drederick Tatum',
        firstAppearance: `Season 02 Episode 13 - "Homer vs. Lisa and the Eighth Commandment"`,
        trivia: `Modeled directly after Mike Tyson, Drederick appeared as a background character before going toe-to-toe with Homer in the episode "The Homer They Fall" of the eighth season`,
        quote: `Interviewer: "Champ, do you feel remorse for your crime?." Drederick: "Oh, yes. Believe me, my god, if I could turn back the clock on my mother's stair-pushing, I would certainly, reconsider it. "`,
        playedBy: `<a href="https://www.imdb.com/name/nm0000279/">Hank Azaria</a>`,
        profileImage: `<img src="assets/Drederick_Tatum.webp" alt="The Champ dressed in formal attire">`,
        video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/jlixmHTccuI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    character8: {
        name: '"Bleeding Gums" Murphy',
        firstAppearance: `Season 01 Episode 06 - "Moaning Lisa"`,
        trivia: `Murphy recorded one album that was wildly successful; Sax on the Beach, however went broke shortly after spending his fortune on  Fabergé eggs`,
        quote: `"The blues isn't about making yourself feeling better, it's about making other people feel worse. "`,
        playedBy: `<a href="https://www.imdb.com/name/nm0853103/">Ron Taylor</a> and <a href="https://www.imdb.com/name/nm2149565/">Daryl L. Coley</a>`,
        profileImage: `<img src="assets/Bleeding_Gums_Murphy.webp" alt="<Murphy hanging out with his famous saxophone">`,
        video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/PX05DJWNj3k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    character9: {
        name: 'Number One',
        firstAppearance: `Season 06 Episode 12 - "Homer the Great"`,
        trivia: `Leader of the Springfield chapter of the secret society known as <em>The Stonecutters</em> Number One runs a very tight ship much like the beloved Jean-Luc Picard played by the same actor.`,
        quote: `"You have joined the Sacred Order of the Stonecutters who since ancient times have split the rocks of ignorance that obscure the light of knowledge and truth. Now let's all get drunk and play ping pong! "`,
        playedBy: `<a href="https://www.imdb.com/name/nm0001772/">Patrick Stewart</a>`,
        profileImage: `<img src="assets/Number_One.png" alt="Number one in full Stonecutter garb">`,
        video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/XXtQMz1RGNw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    character10: {
        name: 'Johnny Tightlips',
        firstAppearance: `Season 08 Episode 11 - "The Twisted World of Marge Simpson"`,
        trivia: `One of Fat Tony's closest goons, Tightlips is an homage to a real life gangster who, when asked while dying in a shootout proclaimed "nobody shot me."`,
        quote: `"I ain't sayin' nothin'!"`,
        playedBy: `<a href="https://www.imdb.com/name/nm0000279/">Hank Azaria</a>`,
        profileImage: `<img src="assets/Johnny_Tightlips.png" alt="Johnny in a suit">`,
        video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/RIGUu0bvpMQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    character11: {
        name: 'Lyle Lanley',
        firstAppearance: `Season 04 Episode 12 - "Marge vs. the Monorail"`,
        trivia: `Everyone's favourite charasmatic con man despite only appearing in two episodes. Largely due to being played by former show regular Phil Hartman who is responsible for some of <em>The Simpsons</em> most iconic characters`,
        quote: `"The name's Lanley. Lyle Lanley. And I come before you good people tonight with an idea. Probably the greatest... Aw, it's not for you. It's more of a Shelbyville idea."`,
        playedBy: `<a href="https://www.imdb.com/name/nm0367005/">Phil Hartman</a>`,
        profileImage: `<img class="lylePic" src="assets/Lyle_Lanley.png" alt="Lyle in his classic salesmans outfit">`,
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/MGlyu5CbnSU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
};

// Audio files to play while clicked

const audioClips = [
    'assets/Superb_choice.mp3',
    'assets/Excellent.mp3',
    'assets/Okely.mp3',
    'assets/Barney.mp3'
]

$('.charButton').on('click', function () {

    // Play audio on click
    let randomAudio = audioClips[Math.floor(Math.random() * audioClips.length)]

    let audioElement = document.createElement('audio');
    audioElement.setAttribute('src', randomAudio);
    audioElement.play()

    // Get character ID on click
    let charId = $(this).attr('id');

    let targetCharacter = characters[charId]

    // Clear field before generating to DOM
    $('.generateToDom').html('')


    // Generate to DOM
    $('.generateToDom').append(`<div class="chalkboard wrapper"><div class="generateImage">${targetCharacter.profileImage}</div><div class="generateText"><h3>${targetCharacter.name}</h3><p><span>First Appearance:</span>${targetCharacter.firstAppearance}</p><p><span>Trivia:</span>${targetCharacter.trivia}</p><p><span>Quote:</span>${targetCharacter.quote}</p><p><span>Voiced By:</span>${targetCharacter.playedBy}</p></div><div class="generateVideo">${targetCharacter.video}</div></div> `)
})

// Clear DOM once element is clicked
$('.mrSparkle').on('click', function () {
    $('.generateToDom').html('')
})