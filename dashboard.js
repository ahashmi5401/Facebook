// RIGHT BAR FUNCTIONALITY 

let textMore = true;

// Only the first 12 items, without the "See More" button kyunkai humm add karwaye ge
// see more button end me 
const option = `
<div><i class="fa-solid fa-circle-user"></i>Muhammad Ayan Hashmi</div>
<div><img src="https://brandlogos.net/wp-content/uploads/2025/08/meta_ai-logo_brandlogos.net_xjwry.png" alt="">Meta Ai</div>
<div><i class="icon1"></i>Friend</div>
<div><i class="icon2"></i>Memory</div>
<div><i class="icon3"></i>Save</div>
<div><i class="icon4"></i>Group</div>
<div><i class="icon5"></i>Video</div>
<div><i class="icon6"></i>Market Place</div>
<div><i class="icon7"></i>Feed</div>
<div><i class="icon8"></i>Event</div>
<div><i class="icon9"></i>Ad Manager</div>
<div><i class="icon10"></i>Birthday</div>
<div><i class="icon11"></i>Chat with AIs</div>
<div><i class="icon12"></i>Gaming Video</div>`;

// Add initial sidebar with "See More" button shuru mi see more dikhe ga 
document.getElementById('rightBarContent').innerHTML = option + `
<div onclick="showOptions()"><i class="fa-solid fa-angle-down"></i> See More</div>`;


function showOptions(){
    if(textMore){
        const rightBarContent = document.getElementById('rightBarContent');
        // option me seemore add nahi hai tabhi humne alg se add kiya take 2 option
        //na hojai 
        rightBarContent.innerHTML = option + `
        <div><i class="icon13"></i>Messenger</div>
        <div><i class="icon14"></i>Messenger Kid</div>
        <div><i class="icon15"></i>Order and Payment</div>
        <div><i class="icon16"></i>Pages</div>
        <div><i class="icon17"></i>Play Games</div>
        <div><i class="icon18"></i>Recent ad activity</div>
        <div onclick="seeLess()"><i class="fa-solid fa-angle-up"></i> See Less</div>`;
        textMore = false; // update kardiya takai see less mai ru ho 
    }
}

// See less function
function seeLess(){
    if(!textMore){
        const rightBarContent = document.getElementById('rightBarContent');
        rightBarContent.innerHTML = option + `
        <div onclick="showOptions()"><i class="fa-solid fa-angle-down"></i> See More</div>`;
        textMore = true; // reset state
    }
}
// modal functionality
const openModalBtn = document.getElementById('openPostModal');
const modal = document.querySelector('.modalBox');
const closeModal = document.querySelector('.cancel i');



// Show modal and block background
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    document.body.style.cursor = "block"
    document.body.style.overflow = 'hidden'; // Prevent scrolling
});

// Hide modal and restore
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
});
// emoji modal
const openBtn = document.getElementById('openEmojiModalBtn');
const closeBtn = document.getElementById('closeModalBtn');
const modalBackdrop = document.getElementById('emojiModalBackdrop');
const emojiGrid = document.getElementById('emojiGrid');
const emojiSearch = document.getElementById('emojiSearch');
const categoryButtons = document.querySelectorAll('.emoji-category button');

const allEmojis = [
  {emoji: '😀', type: 'face'}, {emoji: '😂', type: 'face'}, {emoji: '😍', type: 'face'},
  {emoji: '😎', type: 'face'}, {emoji: '🤔', type: 'face'}, {emoji: '😭', type: 'face'},
  {emoji: '😡', type: 'face'}, {emoji: '😴', type: 'face'}, {emoji: '🥰', type: 'face'},
  {emoji: '🥳', type: 'face'}, {emoji: '🔥', type: 'symbol'}, {emoji: '💯', type: 'symbol'},
  {emoji: '⭐', type: 'symbol'}, {emoji: '🎉', type: 'symbol'}, {emoji: '💖', type: 'symbol'},
  {emoji: '💡', type: 'symbol'}, {emoji: '🏆', type: 'symbol'}, {emoji: '🎶', type: 'symbol'},
  {emoji: '🎯', type: 'symbol'}, {emoji: '📌', type: 'symbol'},
  {emoji: '🇵🇰', type: 'flag'}, {emoji: '🇺🇸', type: 'flag'}, {emoji: '🇬🇧', type: 'flag'},
  {emoji: '🇯🇵', type: 'flag'}, {emoji: '🇨🇦', type: 'flag'}, {emoji: '🇩🇪', type: 'flag'},
  {emoji: '🇫🇷', type: 'flag'}, {emoji: '🇮🇳', type: 'flag'}, {emoji: '🇰🇷', type: 'flag'},
  {emoji: '🇧🇷', type: 'flag'}
];

let currentType = 'all';

function displayEmojis(filter = '') {
  emojiGrid.innerHTML = '';
  const filtered = allEmojis.filter(e =>
    (currentType === 'all' || e.type === currentType) &&
    e.emoji.includes(filter)
  );
  filtered.forEach(e => {
    const btn = document.createElement('button');
    btn.textContent = e.emoji;
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(e.emoji);
      modalBackdrop.classList.remove('active');
      emojiSearch.value = '';
    });
    emojiGrid.appendChild(btn);
  });
}

categoryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    categoryButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentType = btn.dataset.type;
    displayEmojis(emojiSearch.value);
  });
});

openBtn.addEventListener('click', () => {
  modalBackdrop.classList.add('active');
  displayEmojis();
});

closeBtn.addEventListener('click', () => modalBackdrop.classList.remove('active'));

modalBackdrop.addEventListener('click', e => {
  if (e.target === modalBackdrop) modalBackdrop.classList.remove('active');
});

emojiSearch.addEventListener('input', e => displayEmojis(e.target.value));


