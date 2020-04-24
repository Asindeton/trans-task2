const { Router } = require('express')
const Todo = require('../models/Todo')
const router = Router();

router.get('/', async (req, res) => {
  const todos = await Todo.find({})
  res.render('index', {
    title: 'Users',
    isIndex: true,
    todos
  })
})

router.get('/create', (req, res) => {
  res.render('create', {
    title: 'Registration',
    isCreate: true
  })
})

router.post('/create', async (req, res) => {
  const time = new Date();
  const todo = new Todo({
    login: req.body.login,
    email: req.body.email,
    password: req.body.password,
    dateRegistration: time,
    dateLastLogIn: time,
    status: 'Active',
  })
  console.log(time)
  await todo.save()
  res.redirect('/')
})

router.get('/login', (req, res) => {
  res.render('login', {
    title: 'login',
    isLogin: true
  })
})

router.post('/login', async (req, res) => {
  res.redirect('/')
})


router.post('/block', async (req, res) => {
  let userIdArray = req.body.blockUser.split(',');
  if(userIdArray[0] !== ''){
    for(let i = 0; i < userIdArray.length; i++){
      console.log(userIdArray[i])
      const todo = await Todo.findById(userIdArray[i])
      console.log(todo.status)
      todo.status = 'Blocked'
      console.log(todo.status)
      await todo.save()
    }
  }
  res.redirect('/')
})

router.post('/unblock', async (req, res) => {
  let userIdArray = req.body.unBlockUser.split(','); 
  console.log(userIdArray.length)
  if(userIdArray[0] !== ''){
    for(let i = 0; i < userIdArray.length; i++){
      console.log(userIdArray[i])
      const todo = await Todo.findById(userIdArray[i])
      console.log(todo.status)
      todo.status = 'Active'
      console.log(todo.status)
      await todo.save()
    }
  }
  res.redirect('/')
})

router.post('/deleted', async (req, res) => {
  let userIdArray = req.body.deletedUser.split(',');
  if(userIdArray[0] !== ''){
    for(let i = 0; i < userIdArray.length; i++){
      const todo = await Todo.deleteOne({_id:userIdArray[i]})
    }
  }
  res.redirect('/')
})


module.exports = router