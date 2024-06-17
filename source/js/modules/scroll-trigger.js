const addObserver = (el, options) => {
  if(!('IntersectionObserver' in window)) {
    if (options.cb) {
      options.cb(el);
    } else {
      entry.target.classList.add('active')
    }
    return;
  }
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        if (options.cb) {
          options.cb(el)
        } else {
          entry.target.classList.add('active')
        }
        observer.unobserve(entry.target)
      }
    })
  }, options)
  observer.observe(el)
}

const scrollTrigger = (elem, options = {}) => {
  addObserver(elem, options);
}

export {scrollTrigger};
