function showLyrics(mantra) {
    const lyricsDiv = document.getElementById('lyrics');

    if(mantra === 'gayatri') {
        lyricsDiv.innerHTML = `
        Om Bhur Bhuvaḥ Swaḥ<br>
        Tat-savitur Vareñyaṃ<br>
        Bhargo Devasya Dhīmahi<br>
        Dhiyo Yo Naḥ Prachodayāt
        `;
    } else if(mantra === 'mahamrityunjaya') {
        lyricsDiv.innerHTML = `
        Om Tryambakam Yajamahe<br>
        Sugandhim Pushtivardhanam<br>
        Urvarukamiva Bandhanan<br>
        Mrityor Mukshiya Maamritart
        `;
    } else {
        lyricsDiv.innerHTML = "Mantra not found!";
    }
}
