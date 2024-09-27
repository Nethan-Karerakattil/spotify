// Changing opacity of header
const header = document.querySelector("header");
window.addEventListener("scroll", (e) => {
    const scroll = this.scrollY;
    if(scroll > 75){
        header.style.backgroundColor = "rgba(0, 0, 0, 1)";
    }else {
        header.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
    }
})

//Load playlist tiles
generatePlaylistTile([
    {
        tile_title: "Peaceful Piano",
        tile_description: "Relax and indulge with beautiful piano pieces",
        tile_img: "peaceful-piano"
    },

    {
        tile_title: "Deep Focus",
        tile_description: "Keep calm and focus with ambient and post-rock music.",
        tile_img: "deep_focus"
    },

    {
        tile_title: "Instrumental Study",
        tile_description: "Focus with soft study music in the background.",
        tile_img: "instrumental-study"
    },

    {
        tile_title: "Jazz Vibes",
        tile_description: "The original chill instrumental beats playlist.",
        tile_img: "jazz-vibes"
    },

    {
        tile_title: "Focus Flow",
        tile_description: "Uptempo instrumental hip hop beats.",
        tile_img: "focus-flow"
    },

    {
        tile_title: "Workday Lounge",
        tile_description: "Lounge and chill out music for your workday.",
        tile_img: "workday-lounge"
    },
], "focus")

generatePlaylistTile([
    {
        tile_title: "Today's Top Hits",
        tile_description: "Ed Sheeran is on top of the Hottest 50!",
        tile_img: "todays-top-hits"
    },

    {
        tile_title: "RapCaviar",
        tile_description: "New music from Roddy Ricch, Kodak Black, NLE Choppa and BIA.",
        tile_img: "rap-caviar"
    },

    {
        tile_title: "All Out 2010s",
        tile_description: "The biggest songs of the 2010s",
        tile_img: "all-out-of-2010"
    },

    {
        tile_title: "Rock Classics",
        tile_description: "Rock legends & epic songs that continue to inspire generations. Cover: Foo Fighters",
        tile_img: "rock-classics"
    },

    {
        tile_title: "Chill Hits",
        tile_description: "Kick back to the best new and recent chill hits.",
        tile_img: "chill-hits"
    },

    {
        tile_title: "Viva Latino",
        tile_description: "Today's top Latin hits, elevando nuestra música. Cover: Myke Towers",
        tile_img: "viva-latino"
    },
], "spotify-playlists")

function generatePlaylistTile(array, element){
    let HTML = "";
    for(const data of array){
        if(data.tile_description.length > 30){
            data.tile_description = data.tile_description.slice(0, 33) + "...";
        }
    
        HTML += `
        <div class="playlist-tile" onmouseover="mouseOver(this)" onmouseleave="mouseLeave(this)">
            <div class="playlist-thumbnail" style="background-image: url('./images/playlist-images/${data.tile_img}.jpg');">
                <div class="playlist-play button-hide">
                    <svg class="playlist-button" role="img" height="28" width="28" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon">
                        <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                    </svg>
                </div>
            </div>
    
            <div class="playlist-tile-text">
                <h4 class="playlist-title">${data.tile_title}</h4>
                <p class="playlist-description">${data.tile_description}</p>
            </div>
        </div>
        `
    }

    document.querySelector(`.${element}`).innerHTML = HTML;
}

// Playlist tile hover
function mouseOver(tile) {
    const playlistButton = tile.querySelector(".playlist-play");

    playlistButton.classList.add("button-show");
    playlistButton.classList.remove("button-hide");

    playlistButton.style.animation = "mouse-over-tile 300ms";
    playlistButton.style.animation = "";
    playlistButton.style.animation = "mouse-over-tile 300ms";
}

function mouseLeave(tile) {
    const playlistButton = tile.querySelector(".playlist-play");

    playlistButton.classList.add("button-hide");
    playlistButton.classList.remove("button-show");

    playlistButton.style.animation = "mouse-leave-tile 300ms";
    playlistButton.style.animation = "";
    playlistButton.style.animation = "mouse-leave-tile 300ms";
}