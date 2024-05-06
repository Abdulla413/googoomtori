import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useTermilerStore = defineStore({
  id:'termiler',
  state:()=>({
    termiler1: {
      id:1,
      image:"/src/assets/logo-aq.png",
      title:'Where is East Turkistan?',
      topic:'Politic',
      date:'12/5/2024',
      duration:'5',
      content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora molestiae cum cupiditate, non dicta mollitia deserunt sint doloremque accusantium ad aut nesciunt exercitationem pariatur iste, debitis magnam maxime sequi perferendis!'
    },
    termiler2: {
      id:2,
      image:"/src/assets/logo-aq.png",
      author:"Tohti Arish",
      title:'Who is East Turkistan?',
      topic:'Culture',
      date:'12/5/2024',
      duration:'5',
      content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora molestiae cum cupiditate, non dicta mollitia deserunt sint doloremque accusantium ad aut nesciunt exercitationem pariatur iste, debitis magnam maxime sequi perferendis!'
    },
    termiler3: {
      id:3,
      image:"/src/assets/logo-aq.png",
      author:"Tohti Arish",
      topic:'Politic',
      date:'12/5/2024',
      duration:'5',
      title:'What is going on in East Turkistan?',
      content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora molestiae cum cupiditate, non dicta mollitia deserunt sint doloremque accusantium ad aut nesciunt exercitationem pariatur iste, debitis magnam maxime sequi perferendis!'
    }
  }),

  getter:{

  },

  action:{


  }

  
}
  
);
