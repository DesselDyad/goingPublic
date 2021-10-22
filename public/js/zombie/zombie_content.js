module.exports = {
    load_zombie_table: () => {
        return new Promise((resolve, reject) => {
            try {
            }
            catch (e) {
                reject(e);
            }
        })
    },
    zombie_data: page => {
        return new Promise((resolve, reject) => {
            try {
                switch (page) {
                    case "outbreak":
                        {
                            resolve(`
                                <section id="content">
                                    <h1>A zombie apocalypse - The Outbreak</h1>
                                    <p>
                                        Picture yourself inside, you got the fire going, you put on a nice quiet movie, you made a hot cup of coffee - and that's when you hear it: screaming. Screams so full of despair 
                                        and fear it makes your hair raise and gives you goosebumps. The sounds of tires screeching and cars crashing into each other, buildings and whatever else is unfortunate enough 
                                        to be in the way quickly appears too, as well as the sound of explosions and the sky blackening with dark smoke. 
                                    </p>
                                    <p>
                                        Many people, at least from my generation, have at one point in time been asked by a friend - or whomever - what they would do in such a situation. This section is meant as an
                                        actual guide. 
                                        <strong>
                                            However, before i say anything I want you to be aware of the fact that once the outbreak starts - that is, once the first person is bitten - it will take only a minimal amount
                                            of time before your entire town or even large city has reached the state you're seeing outside right now. That is how fast the infection spreads. And be sure, even though the infected will
                                            not be drawn to your house immediately (if you live in a apartment you got a little bit longer as they have a harder time sensing you) they WILL come for you sooner or later - probably sooner
                                        </strong>
                                    </p>
                                    <ol>
                                        <li>
                                            Lock up your place - doors, windows, holes, secret passages, trapdoors, entrances to the attic, everything. Make absolutely sure that nothing short of a 10 man S.W.A.T. team
                                            carrying a couple bazookas and a automated battering ram can get in. 
                                        </li>
                                        <li>
                                            The next step is gathering supplies. Unless you have been preparing and stocking up for WW3, and possibly even then, you can't stay in your apartment/house forever - power, water, 
                                            heat, food and water all are limited, especially the last two, so you need to eventually reach a place with a sufficient amount - if possible, a self-regenerating one, like a spring 
                                            in a mountain, which btw also is unlikely to carry infected water. So gather up everything you can find and carry (though nothing that needs to be cooled and/or cooked) and pack it
                                            in the most practical bag you got. Done? Good. On to the next part.
                                        </li>
                                        <li>
                                                So, you're going to need to defend yourself. Against zombies as well as others. At this point I'd like to point out that all of this means that in a matter of days, possibly less, 
                                            every kind of government, police, military and generally infrastructure will have broken completely down. At best you can hope to meet a rogue ex-military group, now in possession of 
                                            gear and weapons, free to do whatever they want - which is not only logical and likely, but also emphasized and illustrated by various Zombie movies (e.g. "Diary of the Dead" and "28
                                            days later"). If not ex-military then either people gone mad or just in general the kind of people the police was intimidating and protecting society from until now. <br>
                                            So, find everything in your apartment that can be used as a weapon. A gun is useful, but should only be used in emergencies. Not only does a gun shot create a lot of noise, which will
                                            attract both the living(whatever intention they may have) and the zombies - both of which you will want to avoid at all cost. Therefore, melee weapons ought to be your first choice. 
                                            A large kitchen knife, a baseball bat, a hockey stick - really anything you can use to seriously hurt something - or someone - trying to hurt you and that is handy enough for you to be able 
                                            to carry it around. Got it? Let's move on.
                                        </li>
                                        <li>
                                            Concerting clothes. Whether or not you're some kind of IT studying cave troll that is used to living like a hobo anyway or a spoiled pretty princess that is used to 10 kinds 
                                            of make-up, painting finger nails etc etc tec, you may have to adjust yourself. Say goodbye to showers, to luxury, to pretty much every standard of living that you've grown accustomed 
                                            to throughout your life. All you will have available is what you can carry or what you can somehow acquire. This means you wont need more than a few shirts and a bit of clean underwear. 
                                            Leave the rest of the space for more important things or simply leave it empty, you may not only need to pick up something along the way, but you could also find yourself unable to 
                                            stop for a comfortable period of time to re-pack. Also travelling lightly is much more comfortable, especially if you're not used to it - and you may easily have to not only move 
                                            around a lot, but you have to be prepared to both run and fight at any time - from anything, with anything. 
                                        </li>
                                        <li>
                                            If you want to go online in a attempt of informing yourself about what's going on (social media, news channels, whatever) this is your chance. Or if you want to 
                                            call your friends or family, do it asap, the phone networks will not get very busy very quickly, but will break down completely in a matter of days. Also, the longer you wait, the 
                                            bigger is the chance that the infection has spread to whomever you want to call, which means they might've been infected/killed already or may just be unable to answer whatever kind
                                            or communication you're attempting.
                                        </li>
                                        <li>
                                            Last but not least, you might get hurt in some way or another, you may end up being malnutritioned or dehydrated and you could end up simply getting a cold or a migrane or a cut 
                                            or some other common disease. For that reason, take all you may have of medicine, plaster, bandages, painkillers, nasal spray and wwhatever else might come in handy. So pack that too.<br>
                                            At this point, you're technically ready to leave your place and head for some place where you can stay for a longer time. However, depending on how heavy your bag is, you 
                                            could consider packing luxury items like charger cables for your phone and/or ipod/mp3. (NOTE: don't actually listen to music if you're not absolutely certain that you're as safe 
                                            as you could possibly be.) Sound is the one way you have of detecting a zombie unless he comes right at you from the front, don't cheat yourself of that advantage - if you can even
                                            call it that
                                        </li>
                                        <li>
                                            <strong>
                                                PROTECT YOURSELF FROM BITES. Rule NUMBER ONE: DONT GET BITTEN.
                                            </strong> 
                                            The easiest - and only way - for you to avoid dying and returning as one of them is to immediately cut off
                                            the limb that was bitten - and that's not anything you're gonna be happy about doing. The Movie "World War Z" suggested a pretty good way of preventing this from happening. In that 
                                            instance, magazines were wrapped around the arms and fixed with duct tape  in order to prevent the zombies from being able to penetrate all the way through to the arm. Of cause 
                                            it wouldn't be the pick of choice compaired to some proper protection made of leather or even some light metal. Of cause, who's got that kinda stuff lying around at home. 
                                            So magazines, or anything else that can be used to protect your arms and legs, will do fine to help keeping you alive. 
                                        </li>
                                        <li>
                                            Ok, so let's get going. Unbarricade whatever exit you deem the best for leaving (some doors or windows may always be covered with zombies trying to get to you). 
                        
                                        </li>
                                        <li>
                                            Now, this is where I will point to the next section, "Where to go", in which I will try to examine exactly where to go and what to do depending on what the current situation is
                                        </li>
                                    </ol>
                                </section>
                            `);
                            break;
                        }
                    case "equipment":
                        {
                            resolve(`
                                <section id="content">
                                    <h1>
                                        Equipment
                                    </h1>
                                    <p>
                                        I have described several other places on this page in different forms all the different items that i would advice anyone 
                                        to always carry with them, but i have chosen to dedicate this page to sepecifically outline an itinerary. <br />
                                        I am going to split it up in a few sub-categories, namely: 
                                    </p>
                                    <ul>
                                        <li>
                                            <h3>
                                                <i class="fa fa-coffee" aria-hidden="true"></i>
                                                <i class="fa fa-cutlery" aria-hidden="true"></i>
                                                <i class="fa fa-glass" aria-hidden="true"> Nutrition</i>
                                            </h3>
                                            <p>
                                                The longer the apocalypse has lasted, the more scarce food will get. Which means that not only should one eat as much as one can, as often as they can - one 
                                                never knows when one gets to eat again - but also i would advice anyone to always carry as much food and drink as one is capable of carrying, but also ration 
                                                it as much as possible. <br />
                                                Pretty much any kind of food is the right food, in this context, though i will point out that conserves and food with a distant expiration date should be 
                                                prioritized. 
                                            </p>
                                        </li>
                                        <li>
                                            <h3>
                                                <i class="fa fa-medkit" aria-hidden="true"> First-AidKit</i>
                                            </h3>
                                            <p>
                                                In a zombie apocalypse, one won't make it without both access to, and knowledge about, first-aid. Painkillers, bandages and field-equipment, not to mention
                                                the best sterilization one can get ones hand on are highly recommended - especially the last one, if you don't want to turn into "one of them". <br />
                                                Be it dehydration-induced headaches, scratches, bulletwounds, cuts, fevers, sicknesses or something else, the more one is prepared for the better. 
                                            </p>
                                        </li>
                                        <li>
                                            <h3>
                                                <i class="fa fa-wrench" aria-hidden="true"></i>
                                                Gear
                                                <i class="fa fa-fire" aria-hidden="true"> </i>
                                            </h3>
                                            <p>
                                                The more gear one got, the better. One never knows, what obstacles one has to pass - whether it's climbing over something, under something, through something. 
                                                Whether it's something that has to be cut or something that needs to be burned, cooked, built or tied together. The more one can handle, the better. <br />
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <i class="fa fa-suitcase" aria-hidden="true"> Clothes</i>
                                            </p>
                                            <p>
                                                I think this section is going to be fairly self-esplanatory, but i will quickly go over the most basic stuff: <br />
                                                CLothes are extremely important, especially picking the correct clothes is. In a zombie apocalypse, your life depends on your wardrobe in more ways than one. 
                                                You are going to be on the move all the time, you are going to almost exclusively be outside. For your clothes this means that they should aim to be both 
                                                comfortable, warm, durable and as water-resistant as possible. At the same time i would avoid colors and in fact try to get my hands on something dark or even
                                                camouflaged. You wou will far from always have access to a heater, and if you're wet at the same time, it won't be long untill you're entering a hyper-thermic shock. <br />
                                                Furthermore, i want to stress the importance of picking correct footwear. You are going to move a lot, and you're going to move over terrain - which means you
                                                need footwear in which you can cross great distances, while having secure footing. If you crack your ancle or even a leg, you wont be running from the zombies 
                                                for long - i think the point makes itself. 
                                            </p>
                                        </li>
                                        <li>
                                            <h3>
                                                <i class="fa fa-map-o" aria-hidden="true"> Other</i>
                                            </h3>
                                            <p>
                                                Information about everything that doesn't fit in the other categories
                                            </p>
                                        </li>
                                    </ul>
                                    <p>
                                        <strong>
                                            Before i continue with a more detailed overview, i want to stress something - while one needs as much of anything listed below this point, it's also vitally important
                                            to remember, that one is always going to be on the move, meaning it's central for ones survival to pack and travel as light as possible !!
                                        </strong>
                                    </p>
                                </section>
                            `);
                        break;
                        }
                    case "where_to_go":
                        {
                            resolve(`
                                <section id="content">
                                    <h1>Where to go in case of a Zombie Apocalypse</h1>
                                
                                    <h5>
                                        Leaving your door, you have a number of mandatory objectives and important things to watch out for:
                                    </h5>
                                
                                    <h3>
                                        <strong>
                                            Before I say anything, I want you to be aware of the fact that you need to get to a place with a population as small as possible. 
                                            The larger the population is, the more zombies will be drawn to it, and the faster. So if you're living in a large city, get the 
                                            hell out of there. 
                                        </strong>
                                    </h3>
                                    <h3>
                                        <strong>
                                            Main Objectives
                                        </strong>
                                    </h3>
                                    <ul id="main_objectives">
                                        <li>
                                            make sure you are always completely aware of your surroundings - every time you enter a room, you risk a zombie standing hidden 
                                            behind you in a corner or behind the door or even inside a closet. It WILL try to bite you in the neck. For the same reason, never go into dark
                                            alleys or rooms or anything else where your vision is compromised. 
                                        </li>
                                        <li>
                                            In case you thought of just taking a plane (or driving) and leaving the country, you are either getting into a enclosed space, 10000 feet up in the air,
                                            with a bunch of people that may or may not be infected - (again, examples have been shown in existing zombie movies, specifically in "World War Z"). 
                                            Never EVER get into a enclosed space with other people which just might try to kill you later. Other examples could be trains, or even rooms out of which
                                            the only way is blocked by a horde of zombies. 
                                            Returning to "World War Z"') plane scene, I want to make aware of one more thing - pay attention to animals. In the plane, in World War Z, a dog comes running 
                                            down the middle isle. Of cause, because it is a movie, only the main character notices. It SHOULD have been everyone. Even thought the dog may have come 
                                            running out of the plane section because of the slaughter, not because he sensed it in the first place, but animals are, never the less, aware of all kinds of 
                                            things long before you will be. In some cases it can be changes of weather, in other cases it can be smelling the pizza guy (or probably the pizza, I guess). 
                                            They will smell and generally notice the zombiers long before you. So if your dog is behaving strangely in any way, be hyperaware. Don't ignore it and maybe 
                                            even tell him to be quiet. That is when you suddenly get bitten in the shoulder from behind.
                                            This brings me to the next item on the list. --
                                            -
                                        </li>
                                        <li>
                                            STAY aware of your surroundings. Being paranoid all the time is completely legitimate given the situation. If you hear a scratch, something fall down, 
                                            foot steps, or anything else that may seem in any way like it could have been caused by either a zombie, or maybe even other survivors. As mentioned in the previous
                                            item, don't ignore it and think it was just a rat or a bird or "something weird" that isn't worth examining more closely. These are the kinds of small things 
                                            that kill you. 
                                        </li>
                                        <li>
                                            <strong>
                                                Light and the Night
                                            </strong>
                                            Make it to some kind of shelter by night. Whenever it is dark outside, you need to have reached some kind of safe house. You need to sleep, so you can stay 
                                            sharp the next day. If you slip, you die. Not to mention the fact that humans don't see that well in the dark. So if you decide to go outside without enough light to 
                                            produce sufficient vision at least bring a silver platter to present yourself on. Because you WILL get punished for something as stupid as that. In fact, you will be eaten.
                                            That said, I strongly hope you didn't take that to mean that I said it would be fine to go outside when it's dark, just as long as you have enough light. In that 
                                            case you might as well bring a ghettoblaster and turn the volume to max while listening to "Disturbed"'s "Down with the Sickness". Any amount of light will draw attention
                                            already. 
                                            If anything, abuse that fact and draw all zombies in a certain area away by using light and sound and possibly a corpse to clear a path. 
                                        </li>
                                    </ul>
                                
                                    <h3>
                                        <strong>
                                            Optional Objectives
                                        </strong>
                                    </h3>
                                
                                    <ul>
                                        <li>
                                            Supplies. Always make sure to have enough supplies on you for at least a couple of days. You never know where you might get locked down for a while or when you get the next 
                                            chance to stock up. 
                                        </li>
                                        <li>
                                            Your primary concern may be just staying alive, not being able to defend yourself, so you may be prioritizing staying safe over acquiring a weapon (at least that'd be what I would do),
                                            but nevertheless a weapon is always nice. Not to mention the fact that if you are lucky enough to find an accessible gun-shop, you may be able to find not only weapons, but also something 
                                            alike a kevlar west or, again, some kind of armor to protect your arms and legs. 
                                        </li>
                                    </ul>
                            
                                    <h3>
                                        <strong>
                                            Long Term Objectives
                                        </strong>
                                    </h3>
                                    <h3>
                                        Finding a place to stay with the following success criteria
                                    </h3>
                                    <ul>
                                        <li>
                                            Remote - the more remote the location is, the smaller is the risk of either a Zombie or fellow survivors with intentions that may or may not be ill. 
                                        </li>
                                        <li>
                                            Access to sustenance - specifically fresh water and food, either you magically managed to create your own garden, or you learn to hunt and/or fish in whatever source or 
                                            water you found. Fashioning hooks and some line and digging out worms should be easy for everyone. Maybe, at some point, you may even be able to find a real fishing rod, wheel and gear.<br>
                                            For that matter you might as well also look for a silent ranged weapon, both to hunt with and for defensive purposes. The crossbow is a classic choice, but a bow or whatever you 
                                            can handle will also do a fine job
                                        </li>
                                    </ul>
                                </section>
                                `);
                            break;
                        }
                    case "foods_running_out":
                        {
                            resolve('apparently empty')
                            break;

                        }
                    case "supplies":
                        {
                            resolve('apparently empty')
                            break;

                        }
                    case "dead_or_alive":
                        {
                            resolve(
                                `<section id="content">
                                    <h1>The Zombie - Dead or Alive?</h1>
                                
                                    <p>
                                        You can fill their bodies will bullets, you can keep beating them with blunt objects, you can even run them over with cars repeatedly. They don't feel pain, they don't talk, 
                                        they don't recognize their friends and loved ones - in fact they attack them just the same. They even look like nightmares. Yet, throughout various movies, people have a hard 
                                        time killing them and feel like they killed the living, because they still see their friends, and not just mindless monsters. 
                                    </p>
                                    <p>
                                        A strange exception to this general rule of thumb is the movie "Day of the Dead", where a young private of the U.S. Army (he is also a vegetarian) falls in love with a fellow, 
                                        very attractive female soldier. He later get's bitten and turns, but however not only manages to refrain himself from attacking her and her friends (the general assumption is, 
                                        because he was a vegetarian, he now doesn't attack them), but also obeys some simple military commands he seems to remember. Not to mention the fact, that he still shows some kind 
                                        of feelings for the female soldier - (a 3rd guy refers to it as a "Zombie Crush" lol).
                                    </p> 
                                    <p>
                                        This is, however, one of the two only occurrences I have ever heard of that zombies don't immediately enter a frenzy-like state and attack humans. The other occurrence is in 
                                        the movie "Dead Heads", where good ol' 'Cheese' is befriended by the two main characters and later defends them against others. It should however be said that these two 
                                        main characters are themselves zombie's - however, a pretty unconventional kind, as they talk and act normally and only differ from normal people by appearance (and smell). 
                                        There are, also, "normal, conventional" zombies in the movie, which further indicate these two as the good guys. 
                                    </p>
                                    <p>
                                        A third instance is the Zombie comedy movie "Shaun of the Dead" where the main characters best friend gets bitten and turns, yet after the apocalypse he keeps him in the shed, 
                                        like a pet, and spends hours playing video games with him. However, this comedy is a parody on zombie movies in general and as such is on a intellectual level and consistency with
                                        the rest of the general Zombie genre similar to the one met in the "Scary Movie" series compared to the movies this series parodies, which is why I only mention it here to 
                                        advertise the movie, because it's fucking awesome and hilarious.
                                    </p>
                                    <p>
                                        But what are zombies, exactly, dead or alive? Assuming that a living person is defined by all the qualities that are listed above - which a zombie doesn't possess (or does) - they are dead. 
                                        However, one could argue that as long as they are not dead, and that the damage was caused by a virus, there must exist, now or in the future, some kind or anti-virus or cure or
                                        something that is able of reversing what damage has been done. Of cause one could also argue that such a cure doesn't exist (by the look of things, a viable assumption) or that 
                                        the people able of coming up with one will be eaten and/or infected before they can do so - and that you will be too, while you wait for it. 
                                    </p>
                                </section>
                                `);
                            break;
                        }
                    case "philosophical":
                        {
                            resolve(`
                                <section id="content">
                                
                                    <h1>Philosophical Perspectives</h1>
                                    <h5>As many people fall in despair as the apocalypse unfold, they question and debate the reason why it is happening</h5>
                                    <ol>
                                        <li>
                                            religious: wrath of god, armageddon, doomsday, hell is flooding over with sinners (messing with human nature{biological researches}, homosexuals, un-marital sex etc
                                        </li>
                                        <li>
                                            darwinism: survival of the fittest - the fact that zombies are so hard to kill makes them stronger which makes them survive. Of cause they will soon experience a food-shortage, 
                                            so unless they manage to adapt and find a new food source, they too, will die.
                                        </li>
                                        <li>
                                            return to normal: "Let's just go hide in a bunker and wait for it all to blow over". Good one. It won't. That's why it's called apocalypse. Society has broken down. 
                                            No more governments, countries, armies (except for the Army of the Dead) or any other organizations. However, mankind has only been around for like 10000 years in total. 
                                            So in a way, this IS a return to normal. In "World War Z" the concept of Mother Nature being the worlds greatest serial killer, inventing diseases to rid herself of mankind
                                            destroying her by e.g. pollution. Now that mankind has gotten so good at healing and vaccinating and researching at a advanced level, her normal methods wouldn't do any more. So 
                                            she had to come up with something new. 
                                        </li>
                                        <li>
                                            do we even deserve to survive? Mankind has existed for thousands of years, and they have fought wars and killed each other ever since. Among the biggest crimes against mankind
                                            can be mentioned the colonization of various countries, e.g. India being invaded by the British, Africa being invaded and enslaved by various countries, the slave trade in general, 
                                            the near annihilation of the North American and Australian native population the Holocaust, the electric chair and the Spanish inquisition. In various religions there is talk
                                            of a Hell of some kind. Arguably, man is the biggest beast of them all. The Zombie movie "Diary of the Dead" (a personal favourite of mine, btw) questions this very issue in the end - 
                                            showing a scene where Zombies are being used as targets for shooting practice. One of the targets is different from the others: a woman, hanging by her hair, which literally get's her 
                                            head shot in two pieces with a shotgun, the eyes still moving after the rest of her body has dropped to the ground. Treating eachother like that, do we even deserve to survive a 
                                            apocalypse? Or do we have, as suggested in the movie "This is the End", prove ourselves worthy in the eyes of armageddon, to decide whether or not we are to live in the hell that 
                                            earth has become, fall down in the actual hell or be allowed to ascend to heaven - in the case of that specific movie by sacrificing ourselves to save our friends from various 
                                            threats. 
                                        </li>
                                    </ol>
                                </section>
                            `);
                            break;
                        }
                    case "what_is_a_zombie":
                        {
                            resolve(`
                                <section id="content">
                                
                                <h1>What is a zombie?</h1>
                                    <p>
                                        The zombie. By now, an almost mythological, legendary creature and for sure one of the most popular figures in the general horror genre. But what exactly is a zombie? 
                                        I have taken a look at a bunch of different movies, tv series, discussion forums and other resources and these are the most recurring characteristics that I have been able 
                                        to find: 
                                    </p>
                                        <ul>
                                            <li> 
                                                a zombie possesses little to no intelligence and/or personality: in most movies this is explained by a virus infecting the brain, killing off - or at least shutting out/down 
                                                everything that once made a persons personality. As mentioned in the section "How to kill a Zombie" as well, in "Resident Evil" it literally is explained by the T-virus shutting 
                                                down the entire brain, effectively killing the person, then re-animating the hosts body with only the part of the brain activated that is responsible for instinctive action. 
                                                Meaning, in essence, it is driven by just the most animalistic, basic desires - amongst others, and possibly mainly, the need to feed. Which easily explains the zombies general aggression
                                                and why they like biting so much. The infection is then spread through the zombies saliva and transported through the new infected persons bloodstream untill his entire body has
                                                become infected - and he drops dead, get's back up and runs off attacking the next guy.
                                            </li>
                                            <li> 
                                                damage to the body, e.g. shots from a gun, will only do little damage. Unless one puts an entire magasine into the chest, and sometimes not even then, the zombie will not 
                                                even go down, and even if, for sure get back up again. Even less effective is hitting it with blunt objects such as a baseball bat (with the exception of hitting it repeatedly in 
                                                the head with enough force to damage the brain sufficiently. 
                                                Nevertheless, in my opinion it is often exaggerated ridiculously just how tough a zombie is. He may not feel pain, which enables him to perform stronger and be a more durable and 
                                                effective fighter than normal humans, yet that doesn't mean he isn't subjected to certain rules. For example, if shot often enough, he will go down eventually, not keep walking 
                                                infinitely. He may keep at it for longer than normal people, but he will go down. On the other hand, the fact that bites will infect people through saliva seems like a reasonable
                                                theory.
                                                The best way to kill them (if you don't run any risk making noise) is a shot to the head. More specifically, two shots, Always make sure to Double Tap. </li>
                                            <li> 
                                                zombies bite: in every single zombie movie, the infection spreads through bites, sometimes even scratches. If you're bitten, you're fucked, that's pretty much the general consensus. There are exceptions, 
                                                like for example in the Zombie movie "Resident Evil", the infection is caused by a virus, to which there is a anti-virus, possibly even a cure (the last movie hasn't yet been released). 
                                                However, this is a single occurrence, and not generally possible. The only way, as shown in the Zombie movie "World War Z", is to cut off the limb that was bit immediately after the bite 
                                                happened, in order to stop the infection from spreading. In summary, everyone in the zombie genre universally agrees that the infection spreads through bites, and that sometimes, 
                                                if the dose	is concentrated or the space enclosed enough, the infection can also be airbourne - e.g. like in, again, "Resident Evil", where it spreads through the facilities ventilation
                                                shafts. 
                                            </li>
                                        </ul>
                                </section>
                            `);
                            break;
                        }
                    case "how_to_kill_a_zombie":
                        {
                            resolve(`
                                <section id="content">
                                    
                                    <h1>How to kill a Zombie</h1>
                                    <p>
                                        Through many years and countless zombie movies, there has always been one recurring characteristic about zombies: they are tough as nails and hard to put down for good. 
                                        As explained more thoroughly in the "What is a Zombie?" section, this is due to the fact that zombies simply don't feel pain in the same way humans do. <br />
                                        The recurring solution to this problem in various zombie movies is "shoot them in the head".<br /><br /> <strong>More specifically, shoot them twice! Double Tap! Always!</strong><br /><br />
                                        If you're not sure whether or not they will remain down, just make sure they won't as long as you have the chance.<br />
                                        This might be explained best in the Zombie movie "Resident Evil" (1) where it is suggested that people are killed by a virus (the T-virus), which kills the host, and then 
                                        re-animates him with only the part of the brain responsible for instincts, 	which in essence means that he is driven by the most basic need - the need to feed.</p><p> 
                                        It is further suggested that the most effective way to kill a zombie is to cause a sufficiently big head trauma - like shooting it in the head, removing the head or 
                                        However, burning the Zombies, even while still alive, is a sure winner as well, as it simply removes the bodies general ability to function, not to mention move. That said, 
                                    </p>
                                    <h3> In case you want to be extra prepared, here's a suggestion for an elegant, yet effective solution </h3>
                                    <p>
                                        this allows you to: 
                                    </p>
                                    <ul>
                                        <li>Do every kind of yardwork you could possibly need to do</li>
                                        <li>Be well prepared for a zombie apocalypse</li>
                                        <li>Avoid the kind of attention you would get if you had chosen to buy a gun instead</li>
                                    </ul>
                                    
                                    <figure>
                                        <img class="content_image img-responsive" src="../../img/zombie/equipment/yardwork.jpg" />
                                        <figcaption> Zombies, Yardwork and more </figcaption>
                                    <h3>Of cause, if you got the cash to go all out, there's really only one way to go. </h3>
                                    <p>
                                        This will not only make every one jealous as well as making zombie killing both easy and fun, but it will also provide an excellent tool for carving your thanksgiving turkey<br>
                                        The cast of The Walking Dead was as kind as agreeing to act as model
                                    </p>
                                    </figure>
                                    <figure>
                                        <img class="content_image img-responsive" src="../../img/zombie/equipment/lightsaber.jpg" />
                                        <figcaption>source: <a href="http://thezombieapocalypse.com/post/37728593800/lightsabers-the-walking-dead/">http://thezombieapocalypse.com/post/37728593800/lightsabers-the-walking-dead</a> </figcaption>
                                    </figure>
                                    
                                </section>
                                `);
                            break;
                        }
                    case "weapons":
                        {
                            resolve(`
                                <section id="content">
                                    <h1>
                                        Weapons
                                    </h1>
                                    <p>
                                        Killing zombies is no easy task. Zombies are very resilient and tough to bring down. In order to bring them down
                                        permanently, one has to deliver a sufficiently big trauma to their head.<br />
                                        Fortunately, there is quite a large number of ways to accomplish exactly that, as well as various fairly effective 
                                        weapons - at least if used correctly:  
                                    </p>
                                    <p>
                                        I will in the following sections present a number of viable weapons, as well as briefly discussing each weapons 
                                        strengths and weaknesses. 
                                        On top of that - it is likely that, if a apocalypse should ever actually happen, most people will have little to
                                        no training in actually using weapons of pretty much any kind - that is why i will try to provide a overall 
                                        difficulty rating in terms of actually using the weapons (ranging from 1 to 10), as well as an attempt to illustrate which weapon to use 
                                        in which situation and, possibly, in which combination. <br />
                                        <strong>
                                            Of cause nobody ever said there was any limit to how many weapons one can carry - figuratively speaking, of cause. 
                                        </strong>
                                    </p>
                                        <h2>
                                            Silent ranged weapons
                                        </h2>
                                        <p>
                                            There's a number of different ranged weapons, the most used of which are: <strong>the longbow, 
                                                the crossbow and throwing knives</strong>. 
                                        </p>
                                    <div class="image_div">
                                        <figure class="weapon_image" >
                                            <im img-responsiveg src="../../img/zombie/equipment/arrows.jpg" width="150" height="150"/>
                                            <figcaption>Arrows to be used with an arrow, however they symbolically are 
                                                        supposed to represent bolts as well 
                                            </figcaption>
                                        </figure>
                                        <figure class="weapon_image">
                                            <im img-responsiveg src="../../img/zombie/equipment/longbow.jpg" width="150" height="150"/>
                                            <figcaption>A military bow</figcaption>
                                        </figure>
                                        <figure class="weapon_image">
                                            <im img-responsiveg src="../../img/zombie/equipment/crossbow.jpg" width="150" height="150"/>
                                            <figcaption>A military crossbow</figcaption>
                                        </figure>
                                        <figure class="weapon_image">
                                            <im img-responsiveg src="../../img/zombie/equipment/throwing%20knives.jpg" width="150" height="150"/>
                                            <figcaption>A selection of throwing knives</figcaption>
                                        </figure>
                                    </div>
                                    <div class="weapon_div">
                                        <div>
                                            <img class="weapon_image img-responsive" src="../../img/zombie/equipment/longbow.jpg" width="150" height="150"/>
                                        </div>
                                        <div>
                                            <h4>The Bow</h4>
                                            <p>
                                                The bow - especially a longbow - is probably your best choice for ranged precision shooting 
                                                while drawing a minimum amount of attention to yourself. While it has significantly less
                                                piercing power, in terms of penetrating armor, clothes or something similar compared to crossbows
                                                and throwing knives, it ultimately is the weapon of choice for long-distance precision shooting. 
                                            </p>
                                            <p>
                                                <strong>Difficulty-rating: 6. </strong>
                                            </p>
                                            <p>
                                                The bow isn't a particularly complicated weapon to use, and it isn't that difficult
                                                to hit ones target at shorter and medium distances even for relative new beginners, which is why i will give it
                                                a somewhat low rating. That being said, i imagine that there is a - as with any other weapon - incredibly large
                                                skill-gap between the average person, able to hit slow (or non) moving targets at short and medium distances, and 
                                                skilled, adept persons with years of practice, who are able to hit quick moving objects even at large distances 
                                                and with strong winds blowing. 
                                            </p>
                                        </div>
                                    </div>
                                    <div class="weapon_div">
                                        <div>
                                            <img class="weapon_image img-responsive" src="../../img/zombie/equipment/crossbow.jpg" width="150" height="150"/>
                                        </div>
                                        <div>
                                            <h4>The Crossbow</h4>
                                            <p>
                                                The crossbow arguably has the highest piercing power when it comes to penetrating armor, clothing 
                                                and similar things, compared to regular bows/longbows and throwing knives. However, in terms of 
                                                long-distance shooting, it loses to the (long)bow in terms of precision. 
                                            </p>
                                            <p>
                                                <strong>Difficulty-rating: 3. </strong>
                                            </p>
                                            <p>
                                                The crossbow is a fairly straightforward weapon to use - one basically just has to draw back the string, 
                                                fasten it, put a bolt in the "chamber", point the thing and pull the trigger. <br />
                                                As a result of the crossbow not being the long-distance weapon of choice in the first place, it usually isn't 
                                                too difficult to hit your target, as it will usually be fairly close to you. Possibly the most difficult thing
                                                will be to stay calm enough to not be fumbling with the thing long enough to get eaten. 
                                            </p>
                                        </div>
                                    </div>
                                    <div class="weapon_div">
                                        <div>
                                            <img class="weapon_image img-responsive" src="../../img/zombie/equipment/throwing%20knives.jpg" width="150" height="150"/>
                                        </div>
                                        <div>
                                            <h4>
                                                Throwing knives
                                            </h4>
                                            <p>
                                                Throwing knives probably usually can't compete with crossbows and (long)bows in terms of sheer 
                                                range, as well as their precision decreasing rather quickly proportionally to the distance increasing. 
                                                However, if one is adept at using them, they are by far the best choice for stealth, as they are simply smallest 
                                                and easiest to hide. On top of that, it is far quicker qo pull a knife out of ones sleeve than it is to 
                                                ready a (cross/long)bow. 
                                            </p>
                                            <p>
                                                <strong>Difficulty-rating: 10. </strong>
                                            </p>
                                            <p>
                                                I will give throwing knives the maximum possible difficulty, for a number of reasons: 
                                            </p>
                                            <ul>
                                                <li>
                                                    in terms of sheer amount of time required to learn throwing knives, just in order to make them hit the 
                                                    target straight-on with the knives pointy tip, there is arguably no other weapon listed here that comes close. 
                                                </li>
                                                <li>
                                                    once you have taken the (most likely) quite large amount of time to learn just hitting the target, now 
                                                    one has to start practicing to hit it with more force, and less time to aim. I don't have any experience 
                                                    with this myself, but i would imagine the difficulty increasing exponentially proportionally to the force 
                                                    increasing and the time to aim being decreased. 
                                                </li>
                                                <li>
                                                    once one has accomplished that, there is still a rather long way to go - literally. Just as the difficulty
                                                    increasing along with the force of the throw and the time to aim shrinking, the distance of the throw
                                                    increases the difficulty almost exponentially. 
                                                </li>
                                                <li>
                                                    and even when one has mastered all of this, it still is not the same hitting a moving target with it's guard 
                                                    up and trying to dodge. 
                                                </li>
                                                <li>
                                                    lastly, i want to point out the fact that, while it is fairly easy to aquire or create new arrows/bolts for 
                                                    (cross)bows, it is much more difficult to aquire or even create new knives, should your old ones have missed 
                                                    the target and flown right by it into bushes - which one might not evn have the time to return to and search. 
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <h2>
                                        Silent melee weapons
                                    </h2>
                                    <p>
                                        Melee weapons are the best option for both close-quarter combat and sneak-attacks. While they are your best defense against 
                                        zombies that have gotten up close to you, they are also a sort of warning: if any of the zombies blood gets in your own 
                                        bloodstream, you will be infected.  So while you're hacking and slashing, make sure to not come in contact with any <br />
                                    </p>
                                    <div class="figure_div">
                                        <div class="image_div">
                                            <figure class="weapon_image">
                                                <im img-responsiveg src="../../img/zombie/equipment/katana.jpg" width="350"/>
                                                <figcaption id="katana_cap">
                                                    A Katana - The King of melee weapons when figthing zombies 
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <div class="image_div">
                                            <figure class="weapon_image" >
                                                <im img-responsiveg src="../../img/zombie/equipment/axe2.jpg" width="150" height="150"/>
                                                <figcaption>2 crossed fire-axes - fireaxes are widely used in various zombie movies and games
                                                            and are often the melee weapon of choice
                                                </figcaption>
                                            </figure>
                                            <figure class="weapon_image">
                                                <im img-responsiveg src="../../img/zombie/equipment/baseball_bat.jpg" width="150" height="150"/>
                                                <figcaption>2 crossed baseball bats - another extremely popular melee weapon amongst zombie 
                                                            enthusiasts
                                                </figcaption>
                                            </figure>
                                            <figure class="weapon_image">
                                                <im img-responsiveg src="../../img/zombie/equipment/crowbar2.jpg" width="150" height="150"/>
                                                <figcaption>A crowbar - the usual alternative of choice to either the bat or the axe</figcaption>
                                            </figure>
                                        </div>
                                        <div class="image_div">
                                            <figure class="weapon_image">
                                                <im img-responsiveg src="../../img/zombie/equipment/knife.jpg" width="200" height="125" />
                                                <figcaption>
                                                    A knife - the usual favorite close-quarters melee weapon
                                                </figcaption>
                                            </figure>
                                            <figure class="weapon_image">
                                                <im img-responsiveg src="../../img/zombie/equipment/27157437-golf-club.jpg" width="100"/>
                                                <figcaption>
                                                    A golf club - the sporty choice
                                                </figcaption>
                                            </figure>
                                            <figure class="weapon_image">
                                                <im img-responsiveg src="../../img/zombie/equipment/machete.jpg" width="225" height="150"/>
                                                <figcaption>
                                                    The machete - the less exquisite and less durable version of the katana
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div>
                                    <div class="weapon_div">
                                        <div>
                                            <img class="weapon_image img-responsive" src="../../img/zombie/equipment/katana.jpg" width="150" />
                                        </div>
                                        <div>
                                            <h4>The Katana - The King</h4>
                                            <p>
                                                The Katana is all-around the best-suited melee weapon when fighting zombies - period. 
                                                The steel harder than any other blades, the edge is sharper, the metal alloys are more durable and 
                                                more flexible than jsut about any other, and it is much more resilient against corrosion. <br />
                                                Plus, i think i speak for everyone when i say that The Katana is quite simply the coolest hack-and-slash
                                                weapon in the zombies history. 
                                            </p>
                                            <p>
                                                <strong>Difficulty-rating: 2</strong>
                                            </p>
                                            <p>
                                                It's a katana, a type of sword. While it takes a lifetime to master actual sword-fighting, it takes nearly
                                                no training to raise it against zombies and beginning the hacking and slashing. One has to be careful not
                                                to get winded and overrun, of cause, but overall, i estimate it being a fairly easy weapon to use. 
                                            </p>
                                        </div>
                                    </div>
                                    <div class="weapon_div">
                                        <div>
                                            <img class="weapon_image img-responsive" src="../../img/zombie/equipment/axe2.jpg" width="150"/>
                                        </div>
                                        <div>
                                            <h4>
                                                The Axe
                                            </h4>
                                            <p>
                                                The Axe is the typical favorite melee weapon of anyone fighting zombies - it's durable, it's sharp, 
                                                it's easy to use, and most importantly, it's fairly easy to get hold of one, as fire axes are pretty
                                                common in modern society. <br />
                                                While it isn't a katana, it beats just about any other melee weapon in just about every aspect. 
                                            </p>
                                            <p>
                                                <strong>Difficulty rating: 2</strong>
                                            </p>
                                            <p>
                                                It's an axe. Aside from being careful not to chop of part of yourself, there isn't any real trick 
                                                to swinging an axe. 
                                            </p>
                                        </div>
                                    </div>
                                    <div class="weapon_div">
                                        <div>
                                            <img class="weapon_image img-responsive" src="../../img/zombie/equipment/baseball_bat.jpg" width="150"/>
                                        </div>
                                        <div>
                                            <h4>
                                                The Baseball Bat
                                            </h4>
                                            <p>
                                                I guess this one speaks for itself. Let the clubbing begin!
                                            </p>
                                            <p>
                                                <strong>Difficulty-rating: 1</strong>
                                            </p>
                                            <p>
                                                Maybe just about the easiest-to-use weapon i have listed here. Just raise it against whom- or whatever
                                                and start clubbing!
                                            </p>
                                        </div>
                                    </div>
                                    <div class="weapon_div">
                                        <div>
                                            <img class="weapon_image img-responsive" src="../../img/zombie/equipment/crowbar2.jpg" width="150"/>
                                        </div>
                                        <div>
                                            <h4>
                                                The Crowbar
                                            </h4>
                                            <p>
                                                This one is basically a metal baseball bat with a sharp tip. On one hand, steel in the end is tougher 
                                                and harder than wood and doesn't splinter, but on the other hand this one is much more vulnerable towards
                                                corrosion. <br />
                                                Of cause, it has a somewhat large advantage toward other weapons in the it can be used for prying things 
                                                open too - be it doors, locks, trunks, some kind of chest or whatever. 
                                            </p>
                                            <p>
                                                <strong>Difficulty-rating: 2</strong>
                                            </p>
                                            <p>
                                                The only reason i rate this one more difficult to use than the baseball bat is the fact that one has to
                                                strike somewhat angled with the thing for maximum effect - of cause, just clubbing someone over the head
                                                with it, even a zombie, is bound to have a fairly noticable effect all by itself. 
                                            </p>
                                        </div>
                                    </div>
                                    <div class="weapon_div">
                                        <div>
                                            <img class="weapon_image img-responsive" src="../../img/zombie/equipment/knife.jpg" width="150"/>
                                        </div>
                                        <div>
                                            <h4>
                                                The Knife
                                            </h4>
                                            <p>
                                                The knife, just like the last few, is fairly self-explanatory, i guess. While it doesn't quite have the 
                                                range of the other weapons listed, it has it's own set of advantages. <br />
                                                For one thing a knife has just about as many applications as one can think of, more so than swords or bats 
                                                or crowbars - but more importantly, it's much more suitable for close-quarter fighting, where a larger 
                                                weapon would only get in your way. <br />
                                                Also, i guess knives are commonly known for being used to stab zombies that are stuck in an opening or 
                                                behind a fence through the skull or eye - this is extroardinarily well and frequently illustrated in The
                                                Walking Dead. 
                                            </p>
                                            <p>
                                                <strong>Difficulty-rating: 1</strong>
                                            </p>
                                            <p>
                                                It's a knife. Who doesn't know how to use a knife?<br />
                                                The only thing i want to mention here is a warning: if a knife is used to stab a zombie in the head, as 
                                                shown in The Walking Dead, it won't survive for long, unless it's some special super-knife, and even then
                                                it's lifespan is questionable. <br />
                                                A humans skull is much tougher than the movies and games show, and the average knife will break after 
                                                having been used not all too many times, due to sheer fraction and resistance. <br />  
                                            </p>
                                        </div>
                                    </div>
                                    <div class="weapon_div">
                                        <div>
                                            <img class="weapon_image img-responsive" src="../../img/zombie/equipment/27157437-golf-club.jpg" width="130"/>
                                        </div>
                                        <div>
                                            <h4>
                                                The Golf CLub
                                            </h4>
                                            <p>
                                                The golf club is like the baseball bat, except it's probably more flexible, harder and more vulnerable to corrosion - 
                                                however, unlike wood, it is less likely to start rotting in the long run. 
                                            </p>
                                            <p>
                                                <strong>Difficulty-rating: 1</strong>
                                            </p>
                                            <p>
                                                There isn't really anything to it, you just start clubbing at 'em!
                                            </p>
                                        </div>
                                    </div>
                                    <div class="weapon_div">
                                        <div>
                                            <img class="weapon_image img-responsive" src="../../img/zombie/equipment/machete.jpg" width="150"/>
                                        </div>
                                        <div>
                                            <h4>
                                                The Machete
                                            </h4>
                                            <p>
                                                The Machete, to me, is like a "lesser katana". It's shorter, less sharp, less tough, less flexible 
                                                and more vulnerable towards corrosion. 
                                            </p>
                                            <p>
                                                <strong>Difficulty-rating: 1</strong>
                                            </p>
                                            <p>
                                                It's a machete, the classic cheap hack-and-slash choice. <br />
                                                A possible advantage towards other blades might be it's ability to cut your path through virtually any 
                                                amount of bushes, jungle and the like. <br />
                                                It's not that one can't accomplish that with say, a katana, but while that would be a shameful use of the 
                                                katana, crowbars and baseball bats won't be able to keep up anymore. And given the fact that one is likely 
                                                to be forced to do exactly this, i will count this as a clear advantage of the katana.
                                            </p>
                                        </div>
                                    </div>
                                    <h2>
                                        FireArms
                                    </h2>
                                    <p>
                                        Firearms are, of cause, the most powerful weapons against zombies - against anyone, really. However, they are also the most
                                        difficult and especially the most dangerous to actually use. Amongst others maintenance, limited ammunition and noise are 
                                        serious factors that are not to be taken lightly. <br />
                                        Especially the noise part, as it draws more zombies to your location while draining your ammo. However, this problem can, to
                                        so point, be helped, by using a suppressor (available for handguns, rifles and sniper rifles like):
                                    </p>
                                    <div class="figure_div">
                                        <div class="image_div">
                                            <figure class="weapon_image">
                                                <im img-responsiveg src="../../img/zombie/equipment/suppressor.JPG" width="350"/>
                                                <figcaption>
                                                    A simple suppressor
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <div class="image_div">
                                            <figure class="weapon_image">
                                                <im img-responsiveg src="../../img/zombie/equipment/handgun.jpg" width="150"/>
                                                <figcaption>
                                                    A simple handgun
                                                </figcaption>
                                            </figure>
                                            <figure class="weapon_image">
                                                <im img-responsiveg src="../../img/zombie/equipment/handgun2.jpg" width="150"/>
                                                <figcaption>
                                                    A handgun with scope, silencer and star-wars-look, the luxury-edition
                                                </figcaption>
                                            </figure>
                                        </div>
                                        <div class="image_div">
                                            <figure class="weapon_image">
                                                <im img-responsiveg src="../../img/zombie/equipment/rifle.jpg" width="150"/>
                                                <figcaption>
                                                    A Rifle 
                                                </figcaption>
                                            </figure>
                                            <figure class="weapon_image">
                                                <im img-responsiveg src="../../img/zombie/equipment/Shotgun_Mossberg_590.jpg" width="150" />
                                                <figcaption>
                                                    A Shotgun
                                                </figcaption>
                                            </figure>
                                            <figure class="weapon_image">
                                                    <im img-responsiveg src="../../img/zombie/equipment/sniper%20rifle.jpg"  width="150"/>
                                                <figcaption>
                                                    A Sniper Rifle
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div>
                                    <div class="weapon_div">
                                        <div id="double_div">
                                            <img class="weapon_image img-responsive" src="../../img/zombie/equipment/handgun.jpg" width="150"/>
                                            <img class="weapon_image img-responsive" src="../../img/zombie/equipment/handgun2.jpg" width="150"/>
                                        </div>
                                        <div>
                                            <h4>The Handgun</h4>
                                            <p>
                                                The handgun is the seemingly easy and obvious weapon of choice against zombies - however, extreme caution 
                                                is warranted. <br />
                                                Handguns are extremely frequently used in movies and games, however they've got quite a bunch of drawbacks: 
                                            </p>
                                            <ul>
                                                <li>
                                                    <strong>Noise</strong> - first and foremost, they make a hell of a lot of noise, even using a suppressor - this will draw even
                                                    more zombies right to your location. <br />
                                                    On top of that, a gun is sucky for sneaking up one someone, or something. One you use it, you've been made. 
                                                </li>
                                                <li>
                                                    <strong>Maintenance</strong> - guns require care and maintenance. One has to clean ones gun, or it will
                                                    suddenly stop working in the worst possibly moment. 
                                                </li>
                                                <li>
                                                    <strong>Ammunition</strong> - eventually you'll simply run out, especially if you attract more and 
                                                    more zombies with each shot
                                                </li>
                                            </ul>
                                            <p>
                                                Handguns are still powerful and effective of cause - one shot to the head, and the zombie drops. But of 
                                                cause there will be more in a short time. Nevertheless, for quick escapes involving "bursting through 
                                                something" they're just about perfect. 
                                            </p>
                                            <p>
                                                <strong>Difficulty-rating: 8</strong>
                                            </p>
                                            <p>
                                                It might not be all that difficult to point a gun and squeeze the trigger  - but there simply is so much
                                                more to it than that. One has to know how to dis-assemble and re-assemble it in order to clean it, which 
                                                also must be learned - and without taking too long too. <br />
                                                And even if you're a good shot and know your gun in and out, you still have to constantly evaluate whether 
                                                to use it or not. One false decision might be it for you! 
                                            </p>
                                        </div>
                                    </div>
                                    <div class="weapon_div">
                                        <div>
                                            <img class="weapon_image img-responsive" src="../../img/zombie/equipment/rifle.jpg" width="150" />
                                        </div>
                                        <div>
                                            <h4>The Rifle</h4>
                                            <p>
                                                Rifles are basically bigger, more powerful handguns with bigger range and a quicker, automated rate of fire. <br />
                                                Because of that, the same rules and warnings that apply to handguns also apply to rifles - possibly even 
                                                more so, as they are louder, less handy, more complicated and much more difficult to dis- and reassemble. <br />
                                                Of cause, when all drawbacks have been listed, it should also be noted that a rifle is just about the most powerful
                                                middle-ranged weapon there is against zombies - you can just spray 'em down dozens at a time. 
                                            </p>
                                            <p>
                                                <strong>Difficulty-rating: 7</strong>
                                            </p>
                                            <p>
                                                <strong>The same things that apply for handguns, also apply here:</strong>
                                                It might not be all that difficult to point a gun and squeeze the trigger  - but there simply is so much
                                                more to it than that. One has to know how to dis-assemble and re-assemble it in order to clean it, which 
                                                also must be learned - and without taking too long too. <br />
                                                And even if you're a good shot and know your gun in and out, you still have to constantly evaluate whether 
                                                to use it or not. One false decision might be it for you! 
                                            </p>
                                        </div>
                                    </div>
                                    <div class="weapon_div">
                                        <div>
                                            <img class="weapon_image img-responsive" src="../../img/zombie/equipment/Shotgun_Mossberg_590.jpg" width="150"/>
                                        </div>
                                        <div>
                                            <h4>The Shotgun</h4>
                                            <p>
                                                Shotguns are the close-to-middle range alternative to handguns - just much more powerful. You won't be able to do 
                                                precision work, and you'll have a tought time hitting anything at a distance. However, anything right in front of 
                                                you will very soon have a gaping hole in it. 
                                            </p>
                                            <p>
                                                <strong>Difficulty-rating: 5</strong>
                                            </p>
                                            <p>
                                                <strong>The same things that apply for handguns, also apply here:</strong>
                                                Aiming, shooting, handleing the recoil, re-loading, maintenance and dis- and reassembling all aren't too easy to 
                                                pick up on. <br />
                                                That being said, they're overall probably simpler, easier to use and, quite frankly, extremely suitable for fighting 
                                                zombies - especially many of them. 
                                            </p>
                                        </div>
                                    </div>
                                    <div class="weapon_div">
                                        <div>
                                            <img class="weapon_image img-responsive" src="../../img/zombie/equipment/sniper%20rifle.jpg"  width="150" />
                                        </div>
                                        <div>
                                            <h4>The Sniper Rifle</h4>
                                            <p>
                                                In terms of sheer power and range, sniper rifles are uncontested. Hardly any weapon has as big a range, 
                                                and even if they do, they won't very likely be even nearly as accurate, powerful and even potentially silent all at the same time. <br />
                                                Of cause, your target might not hear anything, he and his surroundings will be much too far away from
                                                the actual gun firing - of cause, if a zombie or someone/something else is near you, they will of cause
                                                be drawn to it. <br />
                                                furthermore, sniper rifles might be exquisite long-distance weapons, but then again, if your enemies get
                                                up close, you might want to switch to a "normal" rifle or even a handgun, if not something more quiet. 
                                            </p>
                                            <p>
                                                <strong>Difficulty-rating: 10</strong>
                                            </p>
                                            <p>
                                                <strong>The same things that apply for other handguns, also apply here:</strong>
                                                Sniper rifles probably are the most difficult ones to handle, be it the shooting itself, the maintenance, 
                                                dis- and reassembling them as well as close-quarters combat, which is nearly impossible.  
                                            </p>
                                        </div>
                                    </div>
                                </section>
                                `);
                            break;
                        }
                    case "zombie_games":
                        {
                            resolve('apparently empty');
                            break;
                        }
                    case "zombie_movies":
                        {
                            resolve('this specific one should be parsed from db, just like equipment should be ')
                            break;
                        }
                    default:
                        { // index.html
                            resolve('default')
                        }
                }
            }
            catch (e) {
                reject(e);
            }
        })
    }
}