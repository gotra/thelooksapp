'use strict';

angular.module('thelooksappApp')
  .factory('menu', function($location, $rootScope) {

  var sections = [{
    name: 'Find your look',
    includeUrl: 'components/navigation/navigation.html',
    pages: [{url:'/'}]
  },{
    name: 'Site administration',
    pages: [{
      name: 'Pro Users',
      id: 'layoutContainers',
      url: '/admin/prouser'
    },{
      name: 'Users',
      id: 'layoutGrid',
      url: '/admin/user'
    },{
      name: 'Child Alignment',
      id: 'layoutAlign',
      url: '/layout/alignment'
    },{
      name: 'Options',
      id: 'layoutOptions',
      url: '/layout/options'
    }]
  }];

  var finderDefaultData = {
    sex : 'female',
    color : 'blond',
    length: 'short',
    style: []
  };

  function aggregateFinderData () {
    var styleArray=[];
    for (var key in self.finderStyles) {
      if (self.finderStyles[key]) {
        styleArray.push(key);
      }
    }
    self.finderData.style = styleArray;
    return self.finderData;
  }


  var self;

  function onLocationChange() {
    var activated = false;
    var path = $location.path();
    sections.forEach(function(section) {
      section.pages.forEach(function(page) {
        if (path === page.url) {
          self.selectSection(section);
          self.selectPage(section, page);
          activated = true;
        }
      });
    });
    if (!activated) {
      self.selectSection(sections[3]);
    }
  }
  

  

  $rootScope.$on('$locationChangeSuccess', onLocationChange);

  self = {
    sections: sections,

    selectSection: function(section) {
      self.openedSection = section;
    },
    toggleSelectSection: function(section) {
      self.openedSection = (self.openedSection === section ? null : section);
    },
    isSectionSelected: function(section) {
      return self.openedSection === section;
    },

    selectPage: function(section, page) {
      //page && page.url && $location.path(page.url);
      self.currentSection = section;
      self.currentPage = page;
    },
    isPageSelected: function(section, page) {
      return self.currentPage === page;
    },
    finderData: finderDefaultData,

    finderStyles : {'classic':true,'vintage':false,
    'creative':false,'trendy':false,
    'prestige':false,'curly':false,'bob':false},

    aggregateFinderData : function(){
      return aggregateFinderData();
    }


  };

  return self;


  
});
