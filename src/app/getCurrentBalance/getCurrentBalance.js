import axios from 'axios'

function getCurrentBalanceCanvas(pin, ctx, canvas) {
  const pinNumber = {
    pin
  }
  
  const url = 'https://frontend-challenge.screencloud-michael.now.sh/api/pin/'
  axios.post(url, pinNumber)
    .then(res => {
      const currentBalance = res.data.currentBalance;
      // Update Canvas //
      ctx.beginPath();
      ctx.font = "12px Monaco";
      ctx.fillText(`Your Current Balance is £${currentBalance}`, 155, 100);
      setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }, 2000);
    })
    .catch(err => {
      ctx.beginPath();
      ctx.font = "12px Monaco";
      ctx.fillText('Please enter a valid Pin', 155, 100);
    })
}

async function getCurrentBalance(pin){
  try {
    const pinNumber = {
      pin
    }
    const url = 'https://frontend-challenge.screencloud-michael.now.sh/api/pin/'
    const res = await axios.post(url, pinNumber);
    const data = await res.data.currentBalance;
    return data;
  } catch(err)  {
    console.log('sss')
  }
}

export {
  getCurrentBalanceCanvas,
  getCurrentBalance
}