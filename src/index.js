import { initLoad } from './homeModule'
import { menuLoad } from './menuModule'

initLoad.loadNav()
//initLoad.loadHome()

menuLoad.load()

const changeToHome = () => {
  menuLoad.unload()
  initLoad.loadHome()
}

const changeToMenu = () => {
  initLoad.unloadHome()
  menuLoad.load()
}

const homeBtn = document.querySelector('#liHome')
const menuBtn = document.querySelector('#liMenu')
const contactBtn = document.querySelector('#liContact')

homeBtn.addEventListener('click', changeToHome)
menuBtn.addEventListener('click', changeToMenu)