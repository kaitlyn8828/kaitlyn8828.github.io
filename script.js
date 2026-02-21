document.addEventListener('DOMContentLoaded',function(){
  const projectsBtn = document.getElementById('projectsBtn')
  const backBtn = document.getElementById('backBtn')
  const aboutBtn = document.getElementById('aboutBtn')
  const lifeBtn = document.getElementById('lifeBtn')
  const body = document.body
  const projectsPanel = document.getElementById('projectsPanel')
  const projectLinks = Array.from(document.querySelectorAll('.project'))

  function openProjects(e){
    e && e.preventDefault()
    body.classList.add('show-projects')
    projectsPanel.setAttribute('aria-hidden','false')
  }

  function closeProjects(e){
    e && e.preventDefault()
    body.classList.remove('show-projects')
    projectsPanel.setAttribute('aria-hidden','true')
  }

  projectsBtn.addEventListener('click', openProjects)
  aboutBtn && aboutBtn.addEventListener('click', openProjects)
  lifeBtn && lifeBtn.addEventListener('click', openProjects)
  backBtn.addEventListener('click', closeProjects)

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
