﻿var app = new Vue({
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
      SelTypeCode : [
        {value : '1', text : '지역인재전형'},
        {value : '2', text : '지역균형인재전형'},
        {value : '3', text : '전국인재전형'},
        {value : '4', text : '성인학습자등전형'},
        {value : '5', text : '특수교육대상자전형'},
        {value : '6', text : '특성화고재직자전형'},
        {value : '7', text : '실기전형'},
        {value : '8', text : '특기자전형'},
      ],

      DefaultScoreInput1 :
        {Year : '', Subject : '', SubjectText : null, Unit1 : null, Grade1 : null, Unit2 : null, Grade2 : null, },
      DefaultScoreInput2 :
        {Year : '', Subject : '', SubjectText : null, Unit1 : null, Grade1 : null, SameGrade1 : null, Jaejeok1 : null, Unit2 : null, Grade2 : null, SameGrade2 : null, Jaejeok2 : null,},
      DefaultScoreInput3 :
        {Year : '', Subject : '', SubjectText : null, Unit1 : null, Grade1 : '', Unit2 : null, Grade2 : '', },
    },

    // 실제 입력 데이터 연동
    ScholarShip : '',
    SelTypeCode : '1',
    ScoreInput1 : [
    ],
    ScoreInput2 : [
    ],
    ScoreInput3 : [
    ],

  },


  created : function(){

    // let newItem = {...this.BasicInfo.DefaultScoreInput1};
    // this.ScoreInput1.push(newItem);
    this.AddScoreInput1();
    this.AddScoreInput2();
    this.AddScoreInput3();

  },

  mounted : function(){

  },
 
  computed : {
    ScoreInput1Display : function(){
      return this.ScholarShip == '1';
    },
    ScoreInput2Display : function(){
      return this.ScholarShip == '2';
    },
    ScoreInput3Display : function(){
      return this.ScholarShip == '3';
    },
    ScoreInput4Display : function(){
      return this.ScholarShip == '4';
    },

    SelTypeIsFirst : function(){
      var group = {'학생부교과' : [], '실기/실적' : []};
     
      // step1
      // group['학생부교과'] = this.BasicInfo.SelTypeCode.slice(0,6);
      // group['실기/실적'] = this.BasicInfo.SelTypeCode.slice(6);

      // step2
      // for(let i = 0; i = this.BasicInfo.SelTypeCode.length;i++){
      //   item = this.BasicInfo.SelTypeCode[i];
      //   if(i < 6) {
      //     group['학생부교과'].push(item);
      //   }
      //   else{
      //     group['실기/실적'].push(item);
      //   }
      // }

      // step3
      this.BasicInfo.SelTypeCode.reduce(function(ac, item, idx){
        if(idx < 6) ac['학생부교과'].push(item);
        else ac['실기/실적'].push(item);
        return ac;
      }, group);

      return group;
    },
    SelTypeGroup1 : function(){
      return this.SelTypeIsFirst['학생부교과'];
      // return this.BasicInfo.SelTypeCode.slice(0,6);
    },
    SelTypeGroup2 : function(){
      return this.SelTypeIsFirst['실기/실적'];
      // return this.BasicInfo.SelTypeCode.slice(6);
    },
  },
  methods : {
    AddScoreInput1 : function(){
      // OLD
      // let newItem = Object.assign({}, this.BasicInfo.DefaultScoreInput1);

      // NEW
      let newItem = {...this.BasicInfo.DefaultScoreInput1};
      this.ScoreInput1.push(newItem);
    },
    RemoveScoreInput1 : function(index){
      console.log(this.ScoreInput1.length);
      if(this.ScoreInput1.length == 1){
        alert("지우지마");
        return;
      }
      this.ScoreInput1.splice(index, 1);
    },
    AddScoreInput2 : function(){
      let newItem = {...this.BasicInfo.DefaultScoreInput2};
      this.ScoreInput2.push(newItem);
    },
    RemoveScoreInput2 : function(index){
      console.log(this.ScoreInput2.length);
      if(this.ScoreInput2.length == 1){
        return;
      }
      this.ScoreInput2.splice(index, 1);
    },
    AddScoreInput3 : function(){
      let newItem = {...this.BasicInfo.DefaultScoreInput3};
      this.ScoreInput3.push(newItem);
    },
    RemoveScoreInput3 : function(index){
      console.log(this.ScoreInput3.length);
      if(this.ScoreInput3.length == 1){
        return;
      }
      this.ScoreInput3.splice(index, 1);
    },
  },
})