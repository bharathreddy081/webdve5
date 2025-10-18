

describe('DuckDuckGo search', () => {
    it('searches for WebdriverIO', () => {
        browser.url('https://duckduckgo.com/')

        $('#search_form_input_homepage').setValue('WebdriverIO')
        $('#search_button_homepage').click()

        const title = browser.getTitle()
        console.log('Title is: ' + title)
        // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"

[default]
aws_access_key_id = AKIAYVP4CIPPCMH4EAHN
aws_secret_access_key = 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
output = json
region = us-east-2
        
    })
})
