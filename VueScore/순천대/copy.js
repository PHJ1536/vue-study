
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
      },
  
      // 실제 입력 데이터 연동
      ScholarShip : null,
      SelTypeCode : null,
      ScoreInput1 : [
      ],
  
    },
  
  
    created : function(){
  
      // let newItem = {...this.BasicInfo.DefaultScoreInput1};
      // this.ScoreInput1.push(newItem);
      //this.AddScoreInput1();
  
      //
      this.ScholarShip = '1';
      this.SelTypeCode = '1';
      this.AddScoreInput1Rnd();
      this.AddScoreInput1Rnd();
      this.AddScoreInput1Rnd();
      this.AddScoreInput1Rnd();
      this.AddScoreInput1Rnd();
      this.AddScoreInput1Rnd();
      this.AddScoreInput1Rnd();
      this.AddScoreInput1Rnd();
      console.warn("DEBUG DATA")
  
    },
  
    mounted : function(){
  
    },
    
    computed : {
      ScoreInput1Display : function(){
        return this.ScholarShip == '1';
      },
      ScoreInput2Display : function(){
        return this.ScholarShip == '3';
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
  
      totalScore1 : function(){
        // 1. 없을 때
        if(this.ScoreInput1.length == 0) return '';
        let scoreSum = 0, unitSum = 0;
  
        function toNumber(n){
          if(isNaN(n)) return 0;
          return Number(n);
        }
  
        this.ScoreInput1.forEach(function(d){
          let unit1 = toNumber(d.Unit1), grade1 = toNumber(d.Grade1);
          let unit2 = toNumber(d.Unit2), grade2 = toNumber(d.Grade2);
          scoreSum += unit1 * grade1 + unit2 * grade2;
          unitSum += unit1 + unit2;
        });
  
        return (scoreSum / unitSum).toFixed(2);
      },
    },
    methods : {
      AddScoreInput1 : function(item){
        // OLD
        // let newItem = Object.assign({}, this.BasicInfo.DefaultScoreInput1);
  
        // NEW
        if(item) return this.ScoreInput1.push(item);
        let newItem = {...this.BasicInfo.DefaultScoreInput1};
        this.ScoreInput1.push(newItem);
      },
  
      Rand19 : function(min = 1, max = 9){
        return Math.floor(Math.random() * max) + min;
      },
      AddScoreInput1Rnd : function(){
        let newItem = {
          ...this.BasicInfo.DefaultScoreInput1
          , Year : this.Rand19(1,3)
          , SubjectText : 'aaa'
          , Subject : this.Rand19(1,5)
          , Unit1 : this.Rand19()
          , Grade1 : this.Rand19()
          , Unit2 : this.Rand19()
          , Grade2 : this.Rand19()
        };
  
        // {Year : '1-3', Subject : '1-5', SubjectText : null, Unit1 : 1-9, Grade1 : null, 
        // Unit2 : null, Grade2 : null, }, 
  
        Math.random()
  
        this.AddScoreInput1(newItem);
      },
  
  
  
      RemoveScoreInput1 : function(index){
        console.log(this.ScoreInput1.length);
        if(this.ScoreInput1.length == 1){
          this.ScoreInput1.splice(0,1,{...this.BasicInfo.DefaultScoreInput1});
          //alert("지우지마");
          return;
        }
        this.ScoreInput1.splice(index, 1);
      },
    },
  })