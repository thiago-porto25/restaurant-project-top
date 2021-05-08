import { initLoad } from './homeModule'
import { menuLoad } from './menuModule'
import { contactLoad } from './contactModule'

initLoad.loadNav()
initLoad.loadHome()

const homeBtn = document.querySelector('#liHome')
const menuBtn = document.querySelector('#liMenu')
const contactBtn = document.querySelector('#liContact')

const changeToHome = () => {
  contactLoad.unload()
  contactBtn.setAttribute('class', 'navItem')

  menuLoad.unload()
  menuBtn.setAttribute('class', 'navItem')

  homeBtn.setAttribute('class', 'navItem selected')
  initLoad.loadHome()
}

const changeToMenu = () => {
  contactLoad.unload()
  contactBtn.setAttribute('class', 'navItem')

  initLoad.unloadHome()
  homeBtn.setAttribute('class', 'navItem')

  menuLoad.load()
  menuBtn.setAttribute('class', 'navItem selected')
}

const changeToContact = () => {
  initLoad.unloadHome()
  homeBtn.setAttribute('class', 'navItem')

  menuLoad.unload()
  menuBtn.setAttribute('class', 'navItem')

  contactBtn.setAttribute('class', 'navItem selected')
  contactLoad.load()
}

homeBtn.addEventListener('click', changeToHome)
menuBtn.addEventListener('click', changeToMenu)
contactBtn.addEventListener('click', changeToContact)
