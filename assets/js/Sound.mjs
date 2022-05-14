  const Sound = {

    BGM : document.querySelector('.music'),
    allSFX : document.querySelectorAll('.sound-fx'),
    sfxSlider : document.querySelector('#sfx-slider'),
    sfxLabel : document.querySelector('#sfx-value'),
    sfxCheckBox : document.querySelector('#sfx-checkbox'),
    bgmSlider : document.querySelector('#music-slider'),
    bgmLabel : document.querySelector('#music-value'),
    bgmCheckBox : document.querySelector('#music-checkbox'),

    play : function play(identifier) {
      const sound = document.querySelector(`${identifier}`);

            sound.currentTime = 0;
            sound.play();
    },

    stop : function stop(identifier) {
      const sound = document.querySelector(`${identifier}`);

            sound.pause();
            sound.currentTime = 0;
    },
    
    init : function init() {
            this.allSFX.forEach(sfx => sfx.volume = this.sfxSlider.value / 100 );
      
            this.BGM.loop = true;
            this.BGM.volume = this.bgmSlider.value / 100;
            this.BGM.play();
    },

    loop : function loop(id) {
      let sound = document.querySelector(`${id}`);
          sound.loop = true;
          Sound.play(id)
    },

    modifySFX : function modifySFX() {
      const volume = this.sfxSlider.value;
            this.allSFX.forEach(sfx => sfx.volume = volume / 100);
            this.sfxLabel.textContent = volume;
            Sound.play('#audio-hover')
    },

    modifyBGM : function modifyBGM() {
      const volume = this.bgmSlider.value;
            this.BGM.volume = volume / 100;
            this.BGM.play();
      
            this.bgmLabel.textContent = volume;
    },

    toggleSFX : function toggleSFX() {      
            if (this.sfxCheckBox.checked === true) {
                this.allSFX.forEach(sfx => {
                  sfx.volume = this.sfxSlider.value / 100;
                  sfx.muted = false;
                })
              
                Sound.play('#audio-generic-click');

            } else {
                this.allSFX.forEach(sfx => sfx.muted = true);
            }
    },

    toggleBGM: function toggleBGM() {
            if (this.bgmCheckBox.checked === true) {
              this.BGM.volume = this.bgmSlider.value / 100;
              this.BGM.muted = false;
              Sound.play(`.music`);
            } else {
              this.BGM.muted = true;
              Sound.stop(`.music`);
            }
    }
  }

  export {Sound}