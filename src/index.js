import { initLoad } from './homeModule'
import { menuLoad } from './menuModule'
import { contactLoad } from './contactModule'

const firstLoad = (function() {
  initLoad.loadNav()
  initLoad.loadHome()
})()

const webPageHandler = (function () {
  const _homeBtn = document.querySelector('#liHome')
  const _menuBtn = document.querySelector('#liMenu')
  const _contactBtn = document.querySelector('#liContact')

  const changeToHome = () => {
    const content = document.querySelector('#content')

    if (content.querySelector('#contactBody')) {
      contactLoad.unload()
      _contactBtn.setAttribute('class', 'navItem')
    } else if (content.querySelector('#menuBody')) {
      menuLoad.unload()
      _menuBtn.setAttribute('class', 'navItem')
    }

    _homeBtn.setAttribute('class', 'navItem selected')
    initLoad.loadHome()
  }

  const changeToMenu = () => {
    const content = document.querySelector('#content')

    if (content.querySelector('#contactBody')) {
      contactLoad.unload()
      _contactBtn.setAttribute('class', 'navItem')
    } else if (content.querySelector('#homeBody')) {
      initLoad.unloadHome()
      _homeBtn.setAttribute('class', 'navItem')
    }

    menuLoad.load()
    _menuBtn.setAttribute('class', 'navItem selected')
  }

  const changeToContact = () => {
    const content = document.querySelector('#content')
    console.log(content)

    if (content.querySelector('#menuBody')) {
      menuLoad.unload()
      _menuBtn.setAttribute('class', 'navItem')
    } else if (content.querySelector('#homeBody')) {
      initLoad.unloadHome()
      _homeBtn.setAttribute('class', 'navItem')
    }

    _contactBtn.setAttribute('class', 'navItem selected')
    contactLoad.load()
  }

  _homeBtn.addEventListener('click', changeToHome)
  _menuBtn.addEventListener('click', changeToMenu)
  _contactBtn.addEventListener('click', changeToContact)
})()
