const express=require('express')
const app=express()
const port=5000;
const date = new Date();

  if ((date.getDay()>0)&&(date.getDay()<6)&&(date.getHours()>=9)&&(date.getHours()<=17))
  {
app.get('/', (req, res) => {
  res.sendFile(__dirname+'/index.html')
})
app.get('/Contact', (req, res) => {
  res.sendFile(__dirname+'/Contact-us.html')
})
app.get('/Services', (req, res) => {
  res.sendFile(__dirname+'/Our Services.html')
})
app.get('/Services.css', (req, res) => {
  res.sendFile(__dirname+'/Services.css')
})

  }
  else {
    app.get('/', (req, res) => {
res.sendFile(__dirname+'/Vacation.html')
  })
  app.get('/Contact', (req, res) => {
  res.sendFile(__dirname+'/Vacation.html')
})
app.get('/Services', (req, res) => {
  res.sendFile(__dirname+'/Vacation.html')
})
app.get('/Vacation.css', (req, res) => {
  res.sendFile(__dirname+'/Vacation.css')
})

}
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
