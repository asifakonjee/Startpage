/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/**
 * Search function
 */

const searchInput = document.querySelector("#searchbar > input")
const searchButton = document.querySelector("#searchbar > button")

const lookup = {}
const engine = "google"
const engineUrls = {
  deepl: "https://www.deepl.com/translator#-/-/",
  duckduckgo: "https://duckduckgo.com/?q=",
  ecosia: "https://www.ecosia.org/search?q=",
  google: "https://www.google.com/search?q=",
  startpage: "https://www.startpage.com/search?q=",
  youtube: "https://www.youtube.com/results?q=",
}

const isWebUrl = value => {
  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

const getTargetUrl = value => {
  if (isWebUrl(value)) return value
  if (lookup[value]) return lookup[value]
  return engineUrls[engine] + value
}

const search = () => {
  const value = searchInput.value
  const targetUrl = getTargetUrl(value)
  window.open(targetUrl, "_self")
}

searchInput.onkeyup = event => event.key === "Enter" && search()
searchButton.onclick = search

/**
 * inject bookmarks into html
 */

const bookmarks = [{"id":"sW1a19mvM2BxRtB0","label":"Social","bookmarks":[{"id":"nRzpOjsDHbP91aPq","label":"Facebook","url":"https://www.facebook.com"},{"id":"sU0nDFYPAFxHwE07","label":"What's App","url":"https://web.whatsapp.com/"},{"id":"rFYOr5WHauPfRmCu","label":"Youtube","url":"https://www.youtube.com"},{"id":"mN51co07OXhiaSn5","label":"Gmail","url":"https://www.gmail.com"}]},{"id":"lbyalNLMfcsCDbPC","label":"Linux","bookmarks":[{"id":"jE27eH9WPQ2OXij9","label":"Void Linux","url":"https://voidlinux.org/"},{"id":"BRA7cYzMHvSWVs3a","label":"Arch Wiki","url":"https://wiki.archlinux.org/"},{"id":"3nKRZ4a1NVzUY529","label":"Gitlab","url":"https://gitlab.com/"},{"id":"Zt6bLqoePNms2poG","label":"Github","url":"https://github.com/"}]},{"id":"9IH2JKWyxK54Nj8I","label":"Job","bookmarks":[{"id":"UESJ7gGGUtaf6g7C","label":"Attendance","url":"http://attendance.dghs.gov.bd/dghseams/attend/login.php?hosid=10000396&cdate=2021-12-25&disid=10&div=8&upo=267&touch=&staff=&cdate2=2021-12-25"},{"id":"5La0nWJwegRWrQCp","label":"DGHS","url":"https://dghs.gov.bd/index.php/bd/"},{"id":"ppgqBnkdA8BUyBsU","label":"Ministry Old","url":"http://www.mohfw.gov.bd"},{"id":"V0RcAeOfD75M1ISn","label":"IBAS ++","url":"https://ibas.finance.gov.bd/ibas2/Security/Login?ReturnUrl=%2fibas2%2fIntegrated_Budget_and_Accounting_System"}]},{"id":"n1mn7raRhQh1QYBM","label":"Shows","bookmarks":[{"id":"pYYu6vNmeIibPcSk","label":"Netflix","url":"https://www.netflix.com"},{"id":"yl1G2WIOSq8ii6ls","label":"Cinehub","url":"http://www.cinehub24.com/"},{"id":"5FDllpGmdt6gONyV","label":"YTS ","url":"https://yts.mx/"},{"id":"PktbmPuPD8yHx9co","label":"1337XO Torrent","url":"https://www.1377x.to/"}]},{"id":"ZEr3K6XOwZ5gDASa","label":"Others","bookmarks":[{"id":"59pKnfZeuM15Hquh","label":"Goggle Drive","url":"https://drive.google.com/"},{"id":"cSArh6ZqZdMLpqgw","label":"DGHS Old","url":"https://old.dghs.gov.bd/index.php/bd/"},{"id":"YSQjaVz2Lqb0bmbr","label":"Hot Mail","url":"https://outlook.live.com/mail/0/?actSwt=true"},{"id":"aCk6lIsm11SaxNmX","label":"Yahoo Mail","url":"https://mail.yahoo.com/d/folders/1?guce_referrer=aHR0cHM6Ly9sb2dpbi55YWhvby5jb20v&guce_referrer_sig=AQAAAAVG8o90O0P0vKdWPk-hAul-XI8H5g2m69b5bW2I4AfewgBFVhjt9WAmG3yPLj3iQp_L3wAgJM7QWWuFqFcLlcqdJjl7t-Yd0CdQ1AY6ZPsfDMEk1yV8w79XXfjRG8IS69OjFXSAacveA6xNWLt14RK75MbQpZfgzCy_XguX0Y2w"}]},{"id":"3MTHMAZZtrn902RQ","label":"Mixed","bookmarks":[{"id":"RdPYLrXlALi6RKdG","label":"Reddit","url":"https://www.reddit.com/"},{"id":"JPYFCEOdikYS0t7E","label":"Genesis","url":"https://genesisedu.info/login"},{"id":"KrmmoduXdzPrDkol","label":"Web Pathology","url":"https://www.webpathology.com/"},{"id":"eW6QGVPFkXSZq5pc","label":"Pathology Outlines","url":"https://www.pathologyoutlines.com/"}]}]

const createGroupContainer = () => {
  const container = document.createElement("div")
  container.className = "bookmark-group"
  return container
}

const createGroupTitle = title => {
  const h2 = document.createElement("h2")
  h2.innerHTML = title
  return h2
}

const createBookmark = ({ label, url }) => {
  const li = document.createElement("li")
  const a = document.createElement("a")
  a.href = url
  a.innerHTML = label
  li.append(a)
  return li
}

const createBookmarkList = bookmarks => {
  const ul = document.createElement("ul")
  bookmarks.map(createBookmark).forEach(li => ul.append(li))
  return ul
}

const createGroup = ({ label, bookmarks }) => {
  const container = createGroupContainer()
  const title = createGroupTitle(label)
  const bookmarkList = createBookmarkList(bookmarks)
  container.append(title)
  container.append(bookmarkList)
  return container
}

const injectBookmarks = () => {
  const bookmarksContainer = document.getElementById("bookmarks")
  bookmarksContainer.append()
  bookmarks.map(createGroup).forEach(group => bookmarksContainer.append(group))
}

injectBookmarks()
