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
    const detailPanels = Array.from(document.querySelectorAll('.detail-panel'))
    detailPanels.forEach(p => p.setAttribute('aria-hidden','true'))
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

  // Project detail functionality
  const showProject1Btn = document.getElementById('showProject1')
  const project1Detail = document.getElementById('project1Detail')
  const backFromDetailBtn = document.getElementById('backFromDetail')
  const showProject2Btn = document.getElementById('showProject2')
  const project2Detail = document.getElementById('project2Detail')
  const backFromDetail2Btn = document.getElementById('backFromDetail2')

  function openDetailPanel(panel){
    if(panel){
      panel.setAttribute('aria-hidden','false')
    }
  }

  function closeDetailPanel(panel){
    if(panel){
      panel.setAttribute('aria-hidden','true')
    }
  }

  if(showProject1Btn){
    showProject1Btn.addEventListener('click', function(e){
      e.preventDefault()
      e.stopPropagation()
      openDetailPanel(project1Detail)
    })
  }

  if(backFromDetailBtn){
    backFromDetailBtn.addEventListener('click', function(e){
      e.preventDefault()
      closeDetailPanel(project1Detail)
    })
  }

  if(showProject2Btn){
    showProject2Btn.addEventListener('click', function(e){
      e.preventDefault()
      e.stopPropagation()
      openDetailPanel(project2Detail)
    })
  }

  if(backFromDetail2Btn){
    backFromDetail2Btn.addEventListener('click', function(e){
      e.preventDefault()
      closeDetailPanel(project2Detail)
    })
  }

  // close with Escape
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
      if(project1Detail && project1Detail.getAttribute('aria-hidden') === 'false'){
        closeDetailPanel(project1Detail)
      } else if(project2Detail && project2Detail.getAttribute('aria-hidden') === 'false'){
        closeDetailPanel(project2Detail)
      } else {
        closePanels()
      }
    }
  })
})
