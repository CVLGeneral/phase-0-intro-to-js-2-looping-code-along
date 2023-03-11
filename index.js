
const writeCards = (param1,param2) => {

     const messages = []

    for (let i = 0; i < param1.length; i++) {

        const newMessage = `Thank you, ${param1[i]}, for the wonderful ${param2} gift!`;
       
        messages.push(newMessage);


      }

      return messages;
}


//second assignment 


function countDown(){

let countDown = 10;

while (countDown >= 0) {
console.log(countDown--);
}
}