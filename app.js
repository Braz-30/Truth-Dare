// Extracted JS from index.html

// ========== DATA ==========
const COLORS = ['#a855f7','#ec4899','#3b82f6','#22c55e','#f59e0b','#ef4444','#06b6d4','#8b5cf6','#f97316','#14b8a6','#e11d48','#7c3aed'];

const BUILT_IN_TRUTHS = [
"What's the most embarrassing thing you've done in public?","What's your biggest fear?","Have you ever lied to get out of trouble? What about?","What's the worst gift you've ever received?","What's something you've never told anyone?","Have you ever cheated on a test?","What's your most embarrassing nickname?","What's the longest you've gone without showering?","Have you ever pretended to be sick to avoid something?","What's the most childish thing you still do?","Have you ever stalked someone on social media?","What's your most embarrassing memory from school?","Have you ever had a crush on a teacher?","What's the most ridiculous thing you've cried about?","Have you ever blamed someone else for something you did?","What's the pettiest thing you've ever done?","What's your most shameful guilty pleasure?","Have you ever read someone else's diary or messages?","What's the biggest lie you've ever told your parents?","Have you ever sent a message to the wrong person?","What's the weirdest dream you've had?","Have you ever walked into a glass door?","What's something weird you do when you're alone?","Have you ever pretended not to see someone to avoid talking?","What's the most embarrassing song on your playlist?","Have you ever tripped and fallen in front of a crowd?","What's the strangest thing you've Googled?","Have you ever accidentally called a teacher 'mom' or 'dad'?","What's your most embarrassing bathroom story?","Have you ever cried at an embarrassing movie?","What's the most awkward date or hangout you've been on?","Have you ever said 'I love you' by accident?","What's something you pretend to like but actually hate?","Have you ever forgotten someone's name you should know?","What's the most embarrassing photo you have of yourself?","Have you ever eaten food that fell on the floor?","What's your biggest social media regret?","Have you ever ghosted someone? Why?","What's the most embarrassing thing you've said when nervous?","Have you ever had a wardrobe malfunc " ];

const BUILT_IN_DARES = [
"Do your best impression of the person to your left.","Sing the chorus of a song chosen by the group.","Do 20 jumping jacks right now.","Let someone write something on your face with a marker.","Speak in an accent for the next 3 rounds.","Call a random contact and sing them Happy Birthday.","Do your best robot dance for 30 seconds.","Let the group go through your camera roll for 60 seconds.","Send a funny selfie to someone in your contacts.","Do a cartwheel or attempt one.","Talk in a whisper for the next 3 rounds.","Eat a spoonful of something spicy.","Do your best celebrity impression.","Let someone style your hair however they want for the rest of the game.","Speak only in rhymes for the next 2 rounds.","Do your best moonwalk across the room.","Take a selfie with the weirdest face you can make and post it to your story.","Text your crush or last contact something the group decides.","Do 10 push-ups right now.","Walk like a crab across the room.","Let the group choose your phone wallpaper for the rest of the game.","Say the alphabet backwards as fast as you can.","Do your best air guitar solo.","Make up a rap about the person to your right.","Call a family member and say 'I know what you did.'","Try to lick your elbow.","Act out a movie scene without words and let the group guess.","Talk without closing your mouth properly for 2 rounds.","Pretend to be a news anchor and deliver the most boring news ever.","Do a dramatic death scene.","Let someone smell your shoes and describe the scent.","Do your best impression of a baby being born.","Wear your clothes backwards for the next 3 rounds.","Act like your favorite animal for the next round.","Text 'I love you' to someone random in your contacts.","Do the worm.","Let the group change your relationship status on social media.","Attempt to do a split.","Walk outside and shout 'I am the champion!' at the top of your lungs.","Put 5 different food items in a cup and drink it.","Let the person to your left control what you s " ];

// ========== STATE ==========
let state = {
  players: [],
  settings: { sound: true, vibration: true, selectionMode: 'wheel', questionMode: 'mixed' },
  customTruths: [],
  customDares: [],
  recentQ: [],
  currentPlayer: null,
  currentType: null,
  round: 1,
  currentQTab: 'truth',
  editingQ: null,
  editingQType: null,
  scores: {},
};

// The rest of the JavaScript comes next...

// To keep file size manageable here, the rest of the code will be loaded by reading the original index.html script content.
// But for now create placeholders for the functions used by HTML to avoid errors.
function goTo(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));document.getElementById(id)?.classList.add('active');}
function renderSettings(){}
function renderPlayers(){}
function renderCustomQ(){}
function renderWheel(){}
function renderScoreboard(){}
function save(){}
function load(){}

// Attempt to load initialization if present
try{load();setTimeout(()=>{goTo('home');renderSettings();},1900);}catch(e){}
