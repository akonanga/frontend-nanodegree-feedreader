/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
            function test_url(feed) {
                it('url is defined and populated', function() {
                    expect(feed.url).toBeDefined();
                    expect(feed.url).not.toBeNull();
                    expect(feed.url).toBeTruthy();
                });
            }

            for(var x = 0; x < allFeeds.length; x++) {
                test_url(allFeeds[x]);
            }


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        function test_name(feed) {
            it('name is defined and populated', function() {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBeNull();
                expect(feed.name).toBeTruthy();
            });
        }

        for(var x = 0; x < allFeeds.length; x++) {
            test_name(allFeeds[x]);
        }
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('element is hidden by default', function () {
            expect($('.menu-hidden')).toBeDefined();
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
            //expect($('body').hasClass('menu-hidden')).toBe(true);
        });


        /*TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        /* This is the hide menu test */
        it('icon is triggered NOT to display the menu', function() {
            //console.log('1. menu-hidden is attached to the body='+$('body').hasClass('menu-hidden'));
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
    });


    describe('The menu', function() {
         /*TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        /* This is the show menu test */
        beforeEach(function() {
            $('.menu-icon-link').trigger( 'click' );
        });

        it('icon is triggered to display the menu', function() {
            //console.log('2. menu-hidden is attached to the body='+$('body').hasClass('menu-hidden'));
            expect($('body').hasClass('menu-hidden')).toBeFalsy();
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it('should have at least 1 entry', function (done) {
            //console.log('should have at least 1 entry=' + $('.feed .entry').length);
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });

    });

    /* TODO: Write a new test suite named "New Feed Selection"*/
    describe('New Feed Selection', function() {
        beforeEach(function (done) {
            var loadNdx = Math.floor(Math.random() * 3) + 1;
            loadFeed(loadNdx, function () {
                done();
            });
        });

         /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        it('should have new feed', function (done) {
            console.log('['+$('.header-title').text()+']['+allFeeds[0].name+']');
            expect($('.header-title').text() !== allFeeds[0].name).toBeTruthy();
            done();
        });

        //afterEach(function () {
        //    loadFeed(0);
        //});
    });
}());
