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

  backButtons.forEach(btn => btn.addEventListener('click', function(e){ e.preventDefault(); closePanels() }))

  // wire project cards to toggle details
  const projectCards = Array.from(document.querySelectorAll('.project-card'))
  projectCards.forEach(card=>{
    function toggleDetail(e){
      e && e.preventDefault && e.preventDefault()
      const isActive = card.classList.contains('active')
      // collapse any other open cards
      projectCards.forEach(c=>{
        c.classList.remove('active')
        const det = c.querySelector('.project-detail')
        if(det) det.setAttribute('aria-hidden','true')
      })
      if(!isActive){
        card.classList.add('active')
        const det = card.querySelector('.project-detail')
        if(det) det.setAttribute('aria-hidden','false')
      }
    }

    // clicking the card toggles detail
    card.addEventListener('click', toggleDetail)
    card.addEventListener('keydown', function(e){ if(e.key === 'Enter' || e.key === ' ') toggleDetail(e) })

    // wire the show-more button if present
    const showBtn = card.querySelector('.show-more-btn')
    if(showBtn){
      showBtn.addEventListener('click', function(e){
        e.stopPropagation()
        toggleDetail(e)
        // update aria-expanded
        const expanded = card.classList.contains('active')
        showBtn.setAttribute('aria-expanded', expanded)
      })
    }
  })

  // close with Escape
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') closeProjects()
  })
})
