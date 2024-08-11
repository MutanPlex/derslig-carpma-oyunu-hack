function deneme () {
  var xs = document.querySelector("#multiply-game-container > div > div > main > div > div > div > main > div.h-4\\/6.pb-3.lg\\:pb-6.\\32 xl\\:pb-10.w-full.flex.flex-col.items-center.justify-end.font-bold > div > div > div:nth-child(1)").textContent;
  var xsb = document.querySelector("#multiply-game-container > div > div > main > div > div > div > main > div.h-4\\/6.pb-3.lg\\:pb-6.\\32 xl\\:pb-10.w-full.flex.flex-col.items-center.justify-end.font-bold > div > div > div:nth-child(3)").textContent;
  
  var result = xs * xsb;
  var answer1 = document.querySelector("#multiply-game-container > div > div > main > div > div > div > main > div:nth-child(2) > div.flex.justify-center.item-center.space-x-5 > div:nth-child(1) > div").textContent;
  var answer2 = document.querySelector("div > div > div > main > div:nth-child(2) > div.flex.justify-center.item-center.space-x-5 > div:nth-child(2) > div").textContent;
  var answer3 = document.querySelector("#multiply-game-container > div > div > main > div > div > div > main > div:nth-child(2) > div.flex.justify-center.item-center.space-x-5 > div:nth-child(3) > div").textContent; 

  if(result == answer1){
	document.querySelector("#multiply-game-container > div > div > main > div > div > div > main > div:nth-child(2) > div.flex.justify-center.item-center.space-x-5 > div:nth-child(1) > div").click()
  }
  if(result == answer2){
  	document.querySelector("div > div > div > main > div:nth-child(2) > div.flex.justify-center.item-center.space-x-5 > div:nth-child(2) > div").click();
  }
  if(result == answer3){
    document.querySelector("#multiply-game-container > div > div > main > div > div > div > main > div:nth-child(2) > div.flex.justify-center.item-center.space-x-5 > div:nth-child(3) > div").click();
  }
  setTimeout(deneme, 5);
}
deneme();
