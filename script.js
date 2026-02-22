document.addEventListener('DOMContentLoaded',function(){
  const projectsBtn = document.getElementById('projectsBtn')
  const aboutBtn = document.getElementById('aboutBtn')
  const lifeBtn = document.getElementById('lifeBtn')
  const backButtons = Array.from(document.querySelectorAll('.back-btn'))
  const body = document.body
  const projectsPanel = document.getElementById('projectsPanel')
  const projectLinks = Array.from(document.querySelectorAll('.project'))

  // open a panel by id, keep others closed
  function openPanel(panelId){
    body.classList.add('show-projects')
    const panels = Array.from(document.querySelectorAll('.projects-panel'))
    panels.forEach(p => {
      if(p.id === panelId) p.setAttribute('aria-hidden','false')
      else p.setAttribute('aria-hidden','true')
    })
  }

  function closePanels(){
    body.classList.remove('show-projects')
    const panels = Array.from(document.querySelectorAll('.projects-panel'))
    panels.forEach(p => p.setAttribute('aria-hidden','true'))
  }

  projectsBtn && projectsBtn.addEventListener('click', function(e){ e.preventDefault(); openPanel('projectsPanel') })
  aboutBtn && aboutBtn.addEventListener('click', function(e){ e.preventDefault(); openPanel('aboutPanel') })
  lifeBtn && lifeBtn.addEventListener('click', function(e){ e.preventDefault(); openPanel('lifePanel') })

  // clicking the logo returns to home (closes any open panel)
  const logoEl = document.querySelector('.logo')
  if(logoEl){
    logoEl.addEventListener('click', function(e){
      e.preventDefault && e.preventDefault()
      closePanels()
    })
  }

  backButtons.forEach(btn => btn.addEventListener('click', function(e){ e.preventDefault(); closePanels() }))

  // Project detail toggling removed (static two-column cards only)

  // close with Escape
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') closePanels()
  })
})
