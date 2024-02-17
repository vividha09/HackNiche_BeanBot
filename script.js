const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    try {
        // Launch headless browser
        const browser = await puppeteer.launch();

        // Open a new page
        const page = await browser.newPage();

        // HTML content containing reviews
        const htmlContent = `
            <section id="rating-section" class="merchant-brick merchant-ratings merchant-recent-ratings">
                <h3 class="ratings-heading">Ratings &amp; Reviews</h3>
                <header class="merchant-ratings-header">
                    <div class="ratings-value">5.0<span class="ratings-total">/5</span></div>
                    <div class="ratings-header"><span class="claims-title">Rating based on 2 claims</span></div>
                </header>
                <hr>
                <section class="detail-sub-section rating-widget">
                    <div class="people-holder">
                        <div class="user-details">
                            <section class="user-name">
                                <div class="info">
                                    <p class="name">Mayuresh Lad</p>
                                    <p class="followers">21 Followers</p>
                                </div>
                            </section>
                            <p class="date">20 Jan 1970</p>
                        </div>
                        <div class="review">Loved the quality of service, ambience, safety precautions, taste, and price, promotions, &amp; discounts at this place</div>
                    </div>
                    <div class="people-holder">
                        <div class="user-details">
                            <section class="user-name">
                                <div class="info">
                                    <p class="name">Ram Agrawal</p>
                                    <p class="followers">2 Followers</p>
                                </div>
                            </section>
                            <p class="date">20 Jan 1970</p>
                        </div>
                        <div class="review">Another review here...</div>
                    </div>
                </section>
            </section>
        `;

        // Set the content of the page with the provided HTML
        await page.setContent(htmlContent);

        // Extract review details
        const reviews = await page.evaluate(() => {
            const reviewsElements = document.querySelectorAll('.people-holder');
            const reviewsData = [];
            reviewsElements.forEach(reviewElement => {
                const name = reviewElement.querySelector('.name').textContent.trim();
                const followers = reviewElement.querySelector('.followers').textContent.trim();
                const date = reviewElement.querySelector('.date').textContent.trim();
                const review = reviewElement.querySelector('.review').textContent.trim();
                reviewsData.push({ name, followers, date, review });
            });
            return reviewsData;
        });

        // Write reviews to CSV
        const csvContent = reviews.map(review => `${review.name},${review.followers},${review.date},${review.review}`).join('\n');
        fs.writeFileSync('reviews.csv', csvContent);

        console.log('Reviews extracted and saved to reviews.csv');

        // Close the browser
        await browser.close();

    } catch (error) {
        console.error('Error:', error);
    }
})();
