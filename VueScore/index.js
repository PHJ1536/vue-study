var app = new Vue({
  el: '#wrap',
  data: {
    BasicInfo : {
      UnivID : 1099,
      UnivName : "국립순천대학교",
      ServiceYear : 2023,
      ScholarShip : [
        {value : '1', text : '2022년 이후 고등학교 졸업(예정)자'},
        {value : '2', text : '2008년 ~ 2021년 고등학교 졸업자'},
        {value : '3', text : '2007년 2월 이전 졸업자'},
        {value : '4', text : '고등학교 검정고시출신자'},
      ],
    },

    ScholarShip : null,
  },
  computed : {
    ScoreInput1Display : function(){
      return this.ScholarShip == '1';
    },
    ScoreInput2Display : function(){
      return this.ScholarShip == '3';
    },
  },
})