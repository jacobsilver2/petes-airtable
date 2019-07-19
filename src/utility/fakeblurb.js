function randomBlurb() {
  const randomBlurbs = [
    'A murmuration of starlings is breathtaking. 100,000 birds dancing in waves. While humankind is incapable of this level of collective free expression, a soundtrack might help. And it looks like we found it! The wings are almost touching, while swooping and swirling. Swoon!',
    'Paradise palms sway through this sound. Gentle shadows sweep your path. You can walk barefoot in this landscape but expect some uncomfortable patches. ',
    'If I was told that this act was discovered hiding in a cave, after taking cover in 1939 and never knowing it was safe to come out, I would believe it. Evolution in isolation brings strange fruit. These are no Blue Footed Boobies, but weird things happen in caves. Listen to the dark future, emerging directly from a hidden past.',
    'The Horned Owl doesn’t really have horns. It has large tufts of feathers that look like horns. Big riffs camouflage beauty and cunning in the woods tonight. Turns out it’s not metal; it just looks like metal. Either way, hide your squirrels.',
    'Sharing dreams, super sparkly dreams, is the mission. Bright colors will swirl! Come check out this magic mission - accomplished. We’re still working on the unicorns. :)',
    'Gluten free cookies are just starting to catch up with good old cookie cookies. Removing common ingredients and replacing them with ingenuity - that’s what’s happening here. Great flavor. less filling!',
    'If you like saving the bacon fat to cook your home fries, then you probably like music that brings you home with essential flavors. The problem is, the cook’s still gotta have the right touch to keep it loose and funky. Hallelujah! It’s here! Nice and greasy, and you’re gonna want to sop up every bit.',
    'If you were going to compare this act to something in your wardrobe, think about the slippers you threw on to run an errand but ended up wearing around town all day. A good fit. A weird choice. People notice, even though you forgot all about it. If Brian Eno was a jam band …',
    'Remember that new kid in school that everyone was curious about? Well ... she’s on stage now, and it turns out ‘she’ might not be a ‘she’, and ‘they\' have A LOT to say!',
    'Folks talk about their ‘catalog’. Others, their ‘signature sound’. Some consider \'their place\' in this time. Shit, JUST PLAY YOUR MUSIC! That’s the attitude here. Like, don’t miss your chance to be hit in the head with this honest music.',
    'The songs that stick with us from childhood are songs that choose us. A musical talent has arrived, whose inner twang is emanating out because it has to: it is seeking. Chances are good that one of these songs will choose YOU. (and maybe even let you take her home with you)',
    'There are many threads in the fabric of NYC’s live music theme. Here we have the bold color that brings the pattern to life. Amplified plaid! These notes reach out and grab you. Not only does each song reverberate as a necessary story, but the telling is so enjoyable, so real, so unpretending.',
    'Never mind the raw talent and expression, impressive on their own; it’s the effortless musicianship built around haunting themes that really fills the room. A rare treat to experience this up close!',
  ]
  const randomBlurbIndex = Math.floor(Math.random() * randomBlurbs.length - 1);
  return randomBlurbs[randomBlurbIndex];
}

export default randomBlurb;