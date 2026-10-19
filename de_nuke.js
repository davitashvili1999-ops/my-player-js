		document.addEventListener("DOMContentLoaded", function() {
    var customCSS = `
        .jwplayer .jw-slider-horizontal {
            vertical-align: middle !important;
            margin-top: 0px !important;
            display: inline-block !important;
        }
		/* play-მდე პანელი ჩანდეს როგორც ჩვეულებრივ, ისე სრულ ეკრანზეც */
.jwplayer.jw-state-idle .jw-controlbar,
.jwplayer.jw-state-idle.jw-flag-fullscreen .jw-controlbar {
  display: flex !important;
  opacity: 1 !important;
  visibility: visible !important;
  transform: none !important;
}

/* idle-ისას ზედა/ქვედა ფენა არ უნდა ფარავდეს პანელს */
.jwplayer.jw-state-idle.jw-flag-fullscreen .jw-controls {
  display: block !important;
  opacity: 1 !important;
  visibility: visible !important;
}
		.jwplayer .jw-slider-horizontal .jw-knob,
.jwplayer .jw-slider-horizontal:hover .jw-knob {
    background-color: #ffffff !important;
    border-color: #ffffff !important;
}
/* დროის მაჩვენებლის ვერტიკალურად გასწორება სლაიდერთან */
.jwplayer .jw-controlbar .jw-text-elapsed {
    position: relative !important;
    top: 3px !important; /* საჭიროებისამებრ შეგიძლია შეცვალო 2px-მდე ან 4px-მდე */
}
/* დროის მეორე ნაწილის (სრული ხანგრძლივობის) ვერტიკალურად გასწორება */
.jwplayer .jw-controlbar .jw-text-duration {
    position: relative !important;
    top: 3px !important; /* თუ საჭიროა, შეგიძლია გადააკორექტირო 2px ან 4px-მდე */
}
.jwplayer .jw-rightclick {
    display: none !important;
}
        .jwplayer .jw-controlbar .jw-icon-volume {
            vertical-align: middle !important;
        }
        .jwplayer .jw-volume-tip, 
        .jwplayer .jw-slider-container {
            top: 50% !important;
            transform: translateY(-50%) !important;
        }
        .jwplayer.jw-skin-bekle .jw-tooltip-time,
        .jwplayer .jw-tooltip-time {
            background-color: #116bd8 !important;
            color: #ffffff !important;
            border-color: #116bd8 !important;
        }
        .jwplayer .jw-tooltip-time::after {
            border-top-color: #116bd8 !important;
        }
        .jwplayer .jw-flag-volume-stacked .jw-slider-container {
            display: block !important;
        }
		/* შენი მორგებული კონტექსტური მენიუს დიზაინი */
        .jw-color-primary, 
        .jw-progress, 
        .jw-slider-horizontal .jw-rail .jw-buffer, 
        .jw-slider-horizontal .jw-rail .jw-progress-cue,
        .jw-icon-tooltip.jw-active,
        .jw-toggle.jw-off.jw-active,
        .jw-toggle.jw-on {
            background-color: #116bd8 !important;
        }
.jw-icon-rewind {
    display: none !important;
}
.jwplayer .jw-icon-share,
.jwplayer .jw-icon-cc {
    display: none !important;
}
.jwplayer .jw-icon-settings {
    position: relative !important;
}
.movs-settings-badge {
    position: absolute !important;
    top: 11px !important;
    right: 9px !important;
    font-size: 9px !important;
    padding: 0px 3px !important;
    background: #116bd8 !important;
    color: #fff !important;
    border-radius: 1px !important;
    pointer-events: none !important;
    line-height: 1 !important;
    letter-spacing: -0.5px !important;
    font-weight: 600 !important;
    transition: top 0.2s ease, right 0.2s ease, font-size 0.2s ease !important;
    z-index: 10 !important;
}

/* როცა ფლეიერი სრულ ეკრანზეა (დესკტოპი და ზოგადი) */
.jwplayer.jw-flag-fullscreen .movs-settings-badge {
    top: 17px !important;
    right: 13px !important;
    font-size: 10px !important;
    padding: 0px 3px !important;
}\

/* პლანშეტებისა და მობილურებისებისთვის სრულ ეკრანზე */
@media screen and (max-width: 1024px) {
    .jwplayer.jw-flag-fullscreen .movs-settings-badge,
    .jwplayer:-webkit-full-screen .movs-settings-badge,
    .jwplayer:fullscreen .movs-settings-badge {
        top: 9px !important;
        right: 9px !important;
        font-size: 10px !important;
    }
}

.jwplayer.jw-skin-backle .jw-slider-time .jw-knob,
.jwplayer .jw-slider-time .jw-knob {
    opacity: 1 !important;
    visibility: visible !important;
    transform: scale(1) translateY(-50%) !important;
    top: 50% !important;
}
        .jw-svg-icon {
            fill: #fff !important;
        }
        .jw-slider-horizontal .jw-progress {
            background: #116bd8 !important;
        }
        .jwplayer .jw-controlbar {
            background: linear-gradient(transparent, rgba(0, 0, 0, 0.8)) !important;
        }
/* ჩვეულებრივ რეჟიმში პანელი მუდმივად გამოჩნდეს და არ გაქრეს */
.jwplayer:not(.jw-flag-fullscreen) .jw-controlbar {
    opacity: 1 !important;
    visibility: visible !important;
    transform: none !important;
}

/* ფულსქრინ რეჟიმში კი უპრობლემოდ დაიმალოს, როცა მაუსი არ არის */
.jwplayer.jw-flag-fullscreen.jw-state-idle .jw-controlbar {
    opacity: 0 !important;
    visibility: hidden !important;
}

.jwplayer .jw-tooltip .jw-tooltip-content,
.jwplayer .jw-tooltip-time {
    font-size: 14px !important;
}
        .jwplayer .jw-icon:hover {
            color: #116bd8 !important;
        }
		 .jwplayer .jw-icon-pip:hover {
            color: #116bd8 !important;
			transform: scale(1.1);
        }
.jw-state-idle .jw-svg-icon-play {
    transition: transform 0.2s ease-in-out;
}

.jw-state-idle .jw-svg-icon-play:hover {
    transform: scale(1.1);
}
.jw-state-idle:hover .jw-svg-icon-play {
    transform: scale(1.1);
}

        .jwplayer .jw-icon-play, 
        .jwplayer .jw-icon-pause {
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
        }
@media (max-width: 768px) {
    /* აჩვენე ქვედა პანელის ფლეი ღილაკი მობილურში */
/* ქვედა პანელის ფლეი/პაუზის ღილაკის ვერტიკალურად გასწორება */
.jwplayer .jw-controlbar .jw-icon-playback {
    display: inline-flex !important;
    align-items: center !important;
    vertical-align: middle !important;
    position: relative !important;
    top: 0px !important; /* საჭიროებისამებრ შეგიძლია გადააკორექტირო 1px-დან 3px-მდე სანამ ზუსტად არ ჩაჯდება */
}
}
/* მობილურ მოწყობილობებზე PiP ღილაკის დამალვა */
@media screen and (max-width: 768px) {
    .jw-icon-pip {
        display: none !important;
    }
}
/* 2. მობილურის ქვედა პანელზე Play/Pause ღილაკის გამოჩენა და გასწორება */
@media (max-width: 768px) {
    .jwplayer .jw-icon-playback {
        display: inline-block !important;
        visibility: visible !important;
        opacity: 1 !important;
    }
}

@media (max-width: 768px) {
    /* 1. მხოლოდ მობილურში ცენტრალური კონტეინერის აბსოლუტური ცენტრირება */
    .jwplayer .jw-display-icon-container {
        position: absolute !important;
        top: 50% !important;
        left: 50% !important;
        transform: translate(-50%, -50%) !important;
        margin: 0 !important;
    }

    /* 2. შიდა Play და Pause აიქონების გასწორება ცენტრში მობილურში */
    .jwplayer.jw-state-paused .jw-svg-icon-play,
    .jwplayer.jw-state-paused .jw-svg-icon-pause,
    .jwplayer.jw-state-idle .jw-svg-icon-play {
        position: absolute !important;
        top: 50% !important;
        left: 50% !important;
        transform: translate(-50%, -50%) !important;
    }

    /* 3. ჰოვერი ან დაკლიკების ეფექტი მობილურისთვის, რომ არ გადახტეს */
    .jwplayer.jw-state-paused .jw-display-icon-container:hover .jw-svg-icon-play,
    .jwplayer.jw-state-paused .jw-display-icon-container:hover .jw-svg-icon-pause,
    .jwplayer.jw-state-idle .jw-svg-icon-play:hover {
        transform: translate(-50%, -50%) scale(1.1) !important;
    }
}
/* რომ პანელი ჩანდეს სანამ ფილმი ჩაირთვება (idle ფაზაში) */
.jwplayer.jw-state-idle .jw-controlbar {
    display: block !important;
    opacity: 1 !important;
    visibility: visible !important;
}

/* სურვილისამებრ: თუ გინდა, რომ თავიდანვე ჩანდეს გრადიენტიც პანელის უკან */
.jwplayer.jw-state-idle .jw-plugin-related,
.jwplayer.jw-state-idle .jw-controlbar {
    opacity: 1 !important;
}
/* 1. სეთინგების მენიუს ზუსტი პოზიციონირება კუთხეში */
.jwplayer .jw-settings-menu {
    position: absolute !important;
    bottom: 60px !important;
    right: 15px !important;
    top: auto !important;
    left: auto !important;
    transform: none !important;
    z-index: 9999 !important;
}

@media (max-width: 768px) {
    /* სეთინგების მთავარი ფანჯრის ზომისა და პოზიციის შეზღუდვა მობილურისთვის */
    .jwplayer .jw-settings-menu {
        max-width: 200px !important;
        max-height: 180px !important;
        overflow-y: auto !important;
        border-radius: 0px !important; /* როგორც მოითხოვე - მომრგვალების გარეშე */
        padding: 2px !important;
        bottom: 50px !important;
        right: 10px !important;
    }

    /* შიდა ელემენტების შრიფტისა და პედინგების შემცირება, რომ მეტი დაეტიოს */
    .jwplayer .jw-settings-content button,
    .jwplayer .jw-settings-menu .jw-option {
        font-size: 12px !important;
        padding: 1px 2px !important;
        border-radius: 0px !important;
    }

    /* სათაურის ან უკან დაბრუნების ზოლის დაპატარავება */
    .jwplayer .jw-settings-menu .jw-settings-header {
        font-size: 13px !important;
        padding: 2px !important;
    }
}
    /* მთავარი მენიუ და ყველა შიდა ელემენტი/კონტეინერი მკვეთრი კუთხეებისთვის */
    .jwplayer .jw-settings-menu,
    .jwplayer .jw-settings-menu *,
    .jwplayer .jw-settings-content,
    .jwplayer .jw-settings-submenu {
        border-radius: 0px !important;
    }


/* სრულად ვმალავთ JW Player-ის ორიგინალ მენიუს, რომ თვალით არ შეინიშნოს */
.jwplayer .jw-settings-menu {
    display: none !important;
}
.my-custom-settings-menu {
    display: none;
    position: absolute !important;
    bottom: 55px !important;
    right: 15px !important;
    width: 210px !important;
    background-color: #141414 !important;
    border: 1px solid #282828 !important;
    border-radius: 0px !important;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.8) !important;
    z-index: 999999 !important;
    padding: 0 !important;
    font-family: sans-serif;
}
/* საერთო სტილი აქტიური პუნქტებისთვის შენს მენიუში */
.my-custom-settings-menu .custom-menu-item {
    position: relative !important;
}

/* წითელი წერტილი არჩეული ელემენტის გასწვრივ მარჯვენა მხარეს */
.my-custom-settings-menu .custom-menu-item.active-item::after {
    content: "";
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 6px;
    background-color: #fff; /* წითელი ფერი */
    border-radius: 50%;
}
/*menu copyright*/
.movs-custom-menu {
    position: fixed !important;
    display: none;
    background: rgba(20, 20, 20, 0.6) !important;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid #6a6767 !important;
    border-radius: 3px;
    padding: 1px !important; /* მცირე შიდა დაშორება */
    z-index: 999999999 !important;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.5);
    min-width: 90px !important; /* მინიმალური სიგანე */
    width: auto !important;
}

.movs-custom-menu a {
    display: block;
    padding: 1px 1px !important; /* უფრო კომპაქტური ზომა */
    color: #ffffff !important;
    text-decoration: none !important;
    font-size: 11px !important; /* ტექსტიც უფრო პატარა და neat იქნება */
    font-weight: 500;
    text-align: center;
    border-radius: 1px;
    transition: background 0.15s ease;
}
.custom-menu-header {
    background-color: #1f1f1f !important;
    color: #fff !important;
    padding: 8px 12px !important;
    font-size: 13px !important;
    font-weight: bold;
    border-bottom: 1px solid #333 !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* SVG აიქონის სტილები */
.close-menu {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #cccccc;
    transition: color 0.2s;
}

.close-menu:hover {
    color: #116bd8;
}

.back-btn {
    cursor: pointer;
    font-size: 13px;
    color: #116bd8;
}

.back-btn:hover {
    color: #2680ef;
}

.custom-menu-item {
    padding: 10px 12px !important;
    font-size: 13px !important;
    color: #ffffff !important;
    background: transparent !important;
    border-bottom: 1px solid #222 !important;
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    cursor: pointer;
}

.custom-menu-item span.value {
    color: #aaa;
    font-size: 12px;
}

.custom-menu-item:hover {
    background-color: #116bd8 !important;
    color: #ffffff !important;
}

.custom-menu-item:hover span.value {
    color: #ffffff !important;
}

.active-item {
    background-color: #222 !important;
    color: #116bd8 !important;
    font-weight: bold;
}

.custom-menu-header, .custom-menu-item {
    display: flex;
    align-items: center; /* რომ ისარი და ტექსტი ერთ ჰორიზონტალურ ხაზზე იყოს */
}

.custom-menu-header .back-btn {
    display: inline-flex;
    align-items: center; /* „უკან“ წარწერა და ისარი რომ თანაბრად იჯდეს */
    cursor: pointer;
}
.my-custom-settings-menu {
    /* თითოეული ელემენტის სიმაღლიდან გამომდინარე (მაგ: ~40px თითო), 3 ელემენტისთვის ჯამში ~120-130პიქსელია საჭირო */
    max-height: 149px; 
    overflow-y: auto;  /* თუ ელემენტები ბევრია, გამოჩნდება სქროლი და ფანჯარა აღარ გაიზრდება */
}
.back-btn {
    display: inline-flex;
    align-items: center; /* ეს უზრუნველყოფს, რომ შიგნით არსებული SVG და ტექსტი ერთ ხაზზე, ზუსტად ცენტრში ჩადგეს */
    gap: 4px;
	top: 0px;
    cursor: pointer;
}

.back-btn svg {
	top: 3px;
    display: block;      /* რომ არ გაიწიოს ქვემოთ და ბაზისური ხაზი არ „დაეკარგოს“ */
}
.jwplayer .jw-icon-settings {
    position: relative !important;
}

/* ჩაბნელებული და არააქტიური მენიუს პუნქტი */
.my-custom-settings-menu .custom-menu-item.disabled-item {
    opacity: 0.4;
    cursor: not-allowed;
    pointer-events: none; /* გამორიცხავს ყოველგვარ ქლიქს ან თაჩს */
}
.jwplayer .jw-icon-settings {
    position: relative !important;
}

.jwplayer .jw-tooltip,
.jwplayer .jw-んですよね,
.jwplayer .jw-overlay {
    display: none !important;
}

#movs-custom-tooltip {
    position: absolute !important;
    background: rgba(0, 0, 0, 0.8) !important;
    color: #ffffff !important;
    padding: 5px 10px !important;
    font-size: 11px !important;
    font-family: inherit !important;
    border-radius: 4px !important;
    white-space: nowrap !important;
    pointer-events: none !important;
    z-index: 999999 !important;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4) !important;
    display: none;
}
/* სრულად ვთიშავთ პლეერის ორიგინალ დროის თულტიპებს */
.jwplayer .jw-rail__tooltip,
.jwplayer .jw-tooltip {
    display: none !important;
}


/* ვკუმშავთ ხმის სლაიდერის გარშემო არსებულ სივრცეს და ვუცვლით ფლექსის პარამეტრებს */
.jwplayer .jw-controlbar .jw-group-right {
    width: auto !important;
    justify-content: flex-end !important;
    gap: 0px !important;
}

/* ვხსნათ შიდა ელემენტების ავტომატური გაწევა (flex-grow) */
.jwplayer .jw-controlbar .jw-group-right > div {
    flex-grow: 0 !important;
    margin-left: 4px !important;
    margin-right: 4px !important;
}
/* ვმალავთ JW Player-ის ორიგინალურ დროის მაჩვენებელს */
.jwplayer .jw-text-duration {
    display: none !important;
}
/* ვამცირებთ თავად დროისა და ხმის/* ვმალავთ JW Player-ის ორიგინალურ დროის მაჩვენებელს */
.jwplayer .jw-text-duration {
    display: none !important;
} 
.jw-text-elapsed,
.jw-text-duration{
    display: none !important;
} 
			
        .jw-state-idle .jw-svg-icon-play path{display:none}
        .jw-state-idle .jw-svg-icon-play{;background-image:url(https://movs.ge/svg/play.svg);background-size:contain;background-repeat:no-repeat}
        .jwplayer.jw-state-complete .jw-svg-icon-replay path{display:none}
        .jwplayer.jw-state-complete .jw-svg-icon-replay{background-image:url(https://movs.ge/svg/replay.svg);background-size:contain;background-repeat:no-repeat}
        .jw-state-paused .jw-svg-icon-play path{display:none}
        .jw-state-paused .jw-svg-icon-play{background-image:url(https://movs.ge/svg/play.svg);background-size:contain;background-repeat:no-repeat}
        .jw-state-paused .jw-icon-playback:hover .jw-svg-icon-play{background-image:url(https://movs.ge/svg/play-hover.svg)}
        .jw-svg-icon-pause path{display:none}
        .jw-svg-icon-pause{background-image:url(https://movs.ge/svg/pause.svg);background-size:contain;background-repeat:no-repeat}
        .jw-icon-playback:hover .jw-svg-icon-pause{background-image:url(https://movs.ge/svg/pause-hover.svg)}
        .jw-svg-icon-rewind path{display:none}
        .jw-svg-icon-rewind{background-image:url(https://movs.ge/svg/rewind.svg);background-size:contain;background-repeat:no-repeat}
        .jw-icon-rewind:hover .jw-svg-icon-rewind{background-image:url(https://movs.ge/svg/rewind-hover.svg)}
        .jw-svg-icon-next path{display:none}
        .jw-svg-icon-next{background-image:url(https://movs.ge/svg/next.svg);background-size:contain;background-repeat:no-repeat}
        .jw-icon-next:hover .jw-svg-icon-next{background-image:url(https://movs.ge/svg/next-hover.svg)}
        .jw-icon-cc.jw-settings-submenu-button .jw-svg-icon-cc-off path{display:none}
        .jw-icon-cc.jw-settings-submenu-button .jw-svg-icon-cc-off{background-image:url(https://movs.ge/svg/cc-off.svg);background-size:contain;background-repeat:no-repeat}
        .jw-icon-cc.jw-settings-submenu-button:hover .jw-svg-icon-cc-off{background-image:url(https://movs.ge/svg/cc-off-hover.svg)}
        .jw-svg-icon-cc-on path{display:none}
        .jw-svg-icon-cc-on{background-image:url(https://movs.ge/svg/cc.svg);background-size:contain;background-repeat:no-repeat}
        .jw-icon-cc:hover .jw-svg-icon-cc-on{background-image:url(https://movs.ge/svg/cc-hover.svg)}
        .jw-related-btn path{display:none}
        .jw-svg-icon-more-videos{background-image:url(https://movs.ge/svg/playlist.svg);background-size:contain;background-repeat:no-repeat}
        .jw-related-btn:hover .jw-svg-icon-more-videos{background-image:url(https://movs.ge/svg/playlist-hover.svg)}
        .jw-svg-icon-settings path{display:none}
        .jw-svg-icon-settings{background-image:url(https://movs.ge/svg/hd.svg);background-size:contain;background-repeat:no-repeat}
        .jw-icon-settings:hover .jw-svg-icon-settings{background-image:url(https://movs.ge/svg/hd-hover.svg)}
        .jw-svg-icon-fullscreen-off path{display:none}
        .jw-svg-icon-fullscreen-off{background-image:url(https://movs.ge/svg/fullscreen-off.svg);background-size:contain;background-repeat:no-repeat}
        .jw-icon-fullscreen:hover .jw-svg-icon-fullscreen-off{background-image:url(https://movs.ge/svg/fullscreen-off-hover.svg)}
        .jw-svg-icon-fullscreen-on path{display:none}
        .jw-svg-icon-fullscreen-on{background-image:url(https://movs.ge/svg/fullscreen.svg);background-size:contain;background-repeat:no-repeat}
        .jw-icon-fullscreen:hover .jw-svg-icon-fullscreen-on{background-image:url(https://movs.ge/svg/fullscreen-hover.svg)}
		/*
Ícone de Volume.
 */
.jw-svg-icon-volume-100 path {
  display: none;
}

.jw-svg-icon-volume-100 {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTEwIDcuMjJMNi42MDMgMTBIM3Y0aDMuNjAzTDEwIDE2Ljc4VjcuMjJ6TTUuODg5IDE2SDJhMSAxIDAgMCAxLTEtMVY5YTEgMSAwIDAgMSAxLTFoMy44ODlsNS4yOTQtNC4zMzJhLjUuNSAwIDAgMSAuODE3LjM4N3YxNS44OWEuNS41IDAgMCAxLS44MTcuMzg3TDUuODkgMTZ6bTEzLjUxNyA0LjEzNGwtMS40MTYtMS40MTZBOC45NzggOC45NzggMCAwIDAgMjEgMTJhOC45ODIgOC45ODIgMCAwIDAtMy4zMDQtNi45NjhsMS40Mi0xLjQyQTEwLjk3NiAxMC45NzYgMCAwIDEgMjMgMTJjMCAzLjIyMy0xLjM4NiA2LjEyMi0zLjU5NCA4LjEzNHptLTMuNTQzLTMuNTQzbC0xLjQyMi0xLjQyMkEzLjk5MyAzLjk5MyAwIDAgMCAxNiAxMmMwLTEuNDMtLjc1LTIuNjg1LTEuODgtMy4zOTJsMS40MzktMS40MzlBNS45OTEgNS45OTEgMCAwIDEgMTggMTJjMCAxLjg0Mi0uODMgMy40OS0yLjEzNyA0LjU5MXoiIGZpbGw9InJnYmEoMjQ3LDI0NiwyNDcsMSkiLz48L3N2Zz4=");
  background-size: contain;
  background-repeat: no-repeat;
}


.jw-svg-icon-volume-50 path {
  display: none;
}

.jw-svg-icon-volume-50 {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTEzIDcuMjJMOS42MDMgMTBINnY0aDMuNjAzTDEzIDE2Ljc4VjcuMjJ6TTguODg5IDE2SDVhMSAxIDAgMCAxLTEtMVY5YTEgMSAwIDAgMSAxLTFoMy44ODlsNS4yOTQtNC4zMzJhLjUuNSAwIDAgMSAuODE3LjM4N3YxNS44OWEuNS41IDAgMCAxLS44MTcuMzg3TDguODkgMTZ6bTkuOTc0LjU5MWwtMS40MjItMS40MjJBMy45OTMgMy45OTMgMCAwIDAgMTkgMTJjMC0xLjQzLS43NS0yLjY4NS0xLjg4LTMuMzkybDEuNDM5LTEuNDM5QTUuOTkxIDUuOTkxIDAgMCAxIDIxIDEyYzAgMS44NDItLjgzIDMuNDktMi4xMzcgNC41OTF6IiBmaWxsPSJyZ2JhKDI0NywyNDYsMjQ3LDEpIi8+PC9zdmc+");
  background-size: contain;
  background-repeat: no-repeat;
}


.jw-svg-icon-volume-0 path {
  display: none;
}

.jw-svg-icon-volume-0 {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTEwIDcuMjJMNi42MDMgMTBIM3Y0aDMuNjAzTDEwIDE2Ljc4VjcuMjJ6TTUuODg5IDE2SDJhMSAxIDAgMCAxLTEtMVY5YTEgMSAwIDAgMSAxLTFoMy44ODlsNS4yOTQtNC4zMzJhLjUuNSAwIDAgMSAuODE3LjM4N3YxNS44OWEuNS41IDAgMCAxLS44MTcuMzg3TDUuODkgMTZ6bTE0LjUyNS00bDMuNTM2IDMuNTM2LTEuNDE0IDEuNDE0TDE5IDEzLjQxNGwtMy41MzYgMy41MzYtMS40MTQtMS40MTRMMTcuNTg2IDEyIDE0LjA1IDguNDY0bDEuNDE0LTEuNDE0TDE5IDEwLjU4NmwzLjUzNi0zLjUzNiAxLjQxNCAxLjQxNEwyMC40MTQgMTJ6IiBmaWxsPSJyZ2JhKDI0NywyNDYsMjQ3LDEpIi8+PC9zdmc+");
  background-size: contain;
  background-repeat: no-repeat;
}

    `;

    var styleTag = document.createElement("style");
    styleTag.type = "text/css";
    styleTag.appendChild(document.createTextNode(customCSS));
    document.head.appendChild(styleTag);
});