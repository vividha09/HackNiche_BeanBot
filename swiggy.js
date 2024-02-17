const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set the HTML content to be scraped
  const htmlContent = `<div class=""><div><div class="styles_container__-kShr" data-testid="normal-dish-item"><div class="styles_item__3_NEA"><p class="ScreenReaderOnly_screenReaderOnly___ww-V" tabindex="0">Veg Item. Stovetop Expresso. Costs: 130 rupees, Description: Aconcentrated dose of coffee brewed on a Moka pot over a stovetop with focus on temperatures. Swipe right to add item to cart.</p><div class="styles_detailsContainer__22vh8"><div aria-hidden="true"><i class="styles_icon__m6Ujp styles_itemIcon__1LXTw icon-Veg styles_iconVeg__shLxJ" role="presentation" style="line-height:1.2" aria-hidden="true"></i></div><div class="styles_itemName__hLfgz" aria-hidden="true"><h3 class="styles_itemNameText__3ZmZZ">Stovetop Expresso</h3></div><div class="styles_itemPortionContainer__1u_tj" aria-hidden="true"><span class="styles_price__2xrhD styles_itemPrice__1Nrpd styles_s__66zLz" aria-hidden="true"><span class="rupee">130</span></span></div></div><div class="styles_itemImageContainer__3Czsd styles_itemImageContainerNoImage__2PTSf"><div class="styles_itemAddButton__zJ7-R"></div></div></div><div class="styles_itemDesc__3vhM0" aria-hidden="true">Aconcentrated dose of coffee brewed on a Moka pot over a stovetop with focus on temperatures.</div></div><div class="styles_divider__2JelH styles_customized__3n4RE"></div><div></div></div><div><div class="styles_container__-kShr" data-testid="normal-dish-item"><div class="styles_item__3_NEA"><p class="ScreenReaderOnly_screenReaderOnly___ww-V" tabindex="0">Veg Item. Filter Coffee Decoction. Costs: 80 rupees, Description: Adecoction shot of Tamima Filter coffee in the traditional commercial brewing equipment. Swipe right to add item to cart.</p><div class="styles_detailsContainer__22vh8"><div aria-hidden="true"><i class="styles_icon__m6Ujp styles_itemIcon__1LXTw icon-Veg styles_iconVeg__shLxJ" role="presentation" style="line-height:1.2" aria-hidden="true"></i></div><div class="styles_itemName__hLfgz" aria-hidden="true"><h3 class="styles_itemNameText__3ZmZZ">Filter Coffee Decoction</h3></div><div class="styles_itemPortionContainer__1u_tj" aria-hidden="true"><span class="styles_price__2xrhD styles_itemPrice__1Nrpd styles_s__66zLz" aria-hidden="true"><span class="rupee">80</span></span></div></div><div class="styles_itemImageContainer__3Czsd styles_itemImageContainerNoImage__2PTSf"><div class="styles_itemAddButton__zJ7-R"></div></div></div><div class="styles_itemDesc__3vhM0" aria-hidden="true">Adecoction shot of Tamima Filter coffee in the traditional commercial brewing equipment.</div></div><div class="styles_divider__2JelH styles_customized__3n4RE"></div><div></div></div><div><div class="styles_container__-kShr" data-testid="normal-dish-item"><div class="styles_item__3_NEA"><p class="ScreenReaderOnly_screenReaderOnly___ww-V" tabindex="0">Veg Item. Americano. Costs: 145 rupees, Description: An expresso shot (Zest) , filter coffee with hot water. Swipe right to add item to cart.</p><div class="styles_detailsContainer__22vh8"><div aria-hidden="true"><i class="styles_icon__m6Ujp styles_itemIcon__1LXTw icon-Veg styles_iconVeg__shLxJ" role="presentation" style="line-height:1.2" aria-hidden="true"></i></div><div class="styles_itemName__hLfgz" aria-hidden="true"><h3 class="styles_itemNameText__3ZmZZ">Americano</h3></div><div class="styles_itemPortionContainer__1u_tj" aria-hidden="true"><span class="styles_price__2xrhD styles_itemPrice__1Nrpd styles_s__66zLz" aria-hidden="true"><span class="rupee">145</span></span></div></div><div class="styles_itemImageContainer__3Czsd styles_itemImageContainerNoImage__2PTSf"><div class="styles_itemAddButton__zJ7-R"></div></div></div><div class="styles_itemDesc__3vhM0" aria-hidden="true">An expresso shot (Zest) , filter coffee with hot water.</div></div><div class="styles_divider__2JelH styles_customized__3n4RE"></div><div></div></div><div><div class="styles_container__-kShr" data-testid="normal-dish-item"><div class="styles_item__3_NEA"><p class="ScreenReaderOnly_screenReaderOnly___ww-V" tabindex="0">Veg Item. Pour Over. Costs: 165 rupees, Description: Coffee brewed by pouring hot water over extract an easy on the palette black coffee. Swipe right to add item to cart.</p><div class="styles_detailsContainer__22vh8"><div aria-hidden="true"><i class="styles_icon__m6Ujp styles_itemIcon__1LXTw icon-Veg styles_iconVeg__shLxJ" role="presentation" style="line-height:1.2" aria-hidden="true"></i></div><div class="styles_itemName__hLfgz" aria-hidden="true"><h3 class="styles_itemNameText__3ZmZZ">Pour Over</h3></div><div class="styles_itemPortionContainer__1u_tj" aria-hidden="true"><span class="styles_price__2xrhD styles_itemPrice__1Nrpd styles_s__66zLz" aria-hidden="true"><span class="rupee">165</span></span></div></div><div class="styles_itemImageContainer__3Czsd styles_itemImageContainerNoImage__2PTSf"><div class="styles_itemAddButton__zJ7-R"></div></div></div><div class="styles_itemDesc__3vhM0" aria-hidden="true">Coffee brewed by pouring hot water over extract an easy on the palette black coffee.</div></div><div class="styles_divider__2JelH styles_customized__3n4RE"></div><div></div></div><div><div class="styles_container__-kShr" data-testid="normal-dish-item"><div class="styles_item__3_NEA"><p class="ScreenReaderOnly_screenReaderOnly___ww-V" tabindex="0">Veg Item. French Pressed Coffee. Costs: 165 rupees, Description: Brewing of coffee takes place by pouring hot grounds of coffee and plunging the same. Swipe right to add item to cart.</p><div class="styles_detailsContainer__22vh8"><div aria-hidden="true"><i class="styles_icon__m6Ujp styles_itemIcon__1LXTw icon-Veg styles_iconVeg__shLxJ" role="presentation" style="line-height:1.2" aria-hidden="true"></i></div><div class="styles_itemName__hLfgz" aria-hidden="true"><h3 class="styles_itemNameText__3ZmZZ">French Pressed Coffee</h3></div><div class="styles_itemPortionContainer__1u_tj" aria-hidden="true"><span class="styles_price__2xrhD styles_itemPrice__1Nrpd styles_s__66zLz" aria-hidden="true"><span class="rupee">165</span></span></div></div><div class="styles_itemImageContainer__3Czsd styles_itemImageContainerNoImage__2PTSf"><div class="styles_itemAddButton__zJ7-R"></div></div></div><div class="styles_itemDesc__3vhM0" aria-hidden="true">Brewing of coffee takes place by pouring hot grounds of coffee and plunging the same.</div></div><div></div></div></div>`;

  // Set the HTML content of the page
  await page.setContent(htmlContent);

  // Extract data from hot and cold beverages
  const beverageCategories = await page.evaluate(() => {
    const categories = Array.from(document.querySelectorAll('.styles_categoryContainer__2MUdc'));
    let items = [];

    categories.forEach(category => {
      const categoryName = category.querySelector('.styles_categoryHeader__1QDKx').innerText.trim();
      const categoryItems = Array.from(category.querySelectorAll('.styles_item__1GfKr')).map(item => {
        const name = item.querySelector('h3.styles_itemNameText__3ZmZZ').innerText.trim();
        const price = item.querySelector('span.styles_price__2xrhD').innerText.trim();
        const description = item.querySelector('p').innerText.trim();
        return { categoryName, name, price, description };
      });
      items = items.concat(categoryItems);
    });

    return items;
  });

  // Extract data from the new HTML structure
  const vegItems = await page.evaluate(() => {
    const items = Array.from(document.querySelectorAll('.styles_container__-kShr')).map(item => {
      const name = item.querySelector('h3.styles_itemNameText__3ZmZZ').innerText.trim();
      const price = item.querySelector('span.styles_price__2xrhD').innerText.trim();
      const description = item.querySelector('.styles_itemDesc__3vhM0').innerText.trim();
      return { categoryName: 'Veg Items', name, price, description };
    });

    return items;
  });

  // Combine both sets of data
  const allItems = beverageCategories.concat(vegItems);

  // Save data to CSV file
  const csvContent = allItems.map(item => `${item.categoryName},${item.name},${item.price},${item.description}`).join('\n');
  fs.writeFileSync('beverages.csv', 'Category,Name,Price,Description\n' + csvContent, 'utf8');

  console.log('Data saved to beverages.csv');

  await browser.close();
})();
