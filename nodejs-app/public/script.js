document.getElementById('clickMe').addEventListener('click', () => {
    const message = document.getElementById('message');
    message.textContent = 'You clicked the button!';
    drawCircle();
  });
  
  function drawCircle() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 300;
    canvas.height = 300;
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(150, 150, 50, 0, Math.PI * 2);
    ctx.fill();
  }
  