import { initLoad } from './homeModule'
import { menuLoad } from './menuModule'

const homeBtn = document.querySelector('#liHome')
const menuBtn = document.querySelector('#liMenu')
const contactBtn = document.querySelector('#liContact')

const changeToHome = () => {
  menuLoad.unload()
  initLoad.loadHome()
}

const changeToMenu = () => {
  initLoad.unloadHome()
  menuLoad.load()
}

homeBtn.addEventListener('click', changeToHome)
menuBtn.addEventListener('click', changeToMenu)

initLoad.loadNav()
initLoad.loadHome()