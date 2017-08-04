let links = ["https://img.cheercut.com/20160822024600_32.jpg",

"https://cdn.vox-cdn.com/uploads/chorus_asset/file/6261915/jbareham_160329_1003_B0020_walt.0.jpg",

"https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone7plus/iphone7plus-colors.jpg",

"https://www.jeffreydonenfeld.com/wp-content/uploads/2016/03/main-ueroll-family.jpg"
];

let titles = ["My favorite anime -- ONEPIECE", "iPad", "iPhone", "UERool Speaker"]
let index = 0;
let autoplay = true;

function prevPic() {
  
}
function nextPic() {
  console.log("nextPic: " + index);
  let img = document.getElementById("pic");
  index++;
  img.src = links[index % links.length];
  
  let title = document.getElementById("title");
  title.innerHTML = titles[index % links.length];
  console.log(title);
  
  if(autoplay) {
    setTimeout(nextPic, 4000);
  }
}

if(autoplay) {
    setTimeout(nextPic, 4000);
}
