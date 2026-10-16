# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 12_SVG\01_svg_task.spec.ts >> SVG Elements >> Verify the SVG Elements
- Location: tests\12_SVG\01_svg_task.spec.ts:13:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('svg').first()
    - locator resolved to <svg width="16" height="16" fill="none" viewBox="0 0 16 16">…</svg>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div tabindex="-1" class="mcO4kT RFBkxv">…</div> intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div tabindex="-1" class="mcO4kT RFBkxv">…</div> intercepts pointer events
    - retrying click action
      - waiting 100ms
    27 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div tabindex="-1" class="mcO4kT RFBkxv">…</div> intercepts pointer events
     - retrying click action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e13]:
    - generic [ref=e16]:
      - generic [ref=e18]:
        - generic [ref=e27]:
          - generic [ref=e29]:
            - img "Image" [ref=e32]
            - img "Image" [ref=e35]
          - link [ref=e37] [cursor=pointer]:
            - /url: /flights-travel-uhp-at-store?marketplace=FKT
            - img "Image" [ref=e40]
            - img "Image" [ref=e43]
        - generic [ref=e53]:
          - generic [ref=e54]: Location not set
          - generic [ref=e59]: Select delivery location
      - banner [ref=e70]:
        - generic [ref=e74]:
          - button "Search for Products, Brands and More" [ref=e75] [cursor=pointer]:
            - img "Search Icon" [ref=e76]
          - textbox "Search for Products, Brands and More" [ref=e80]: macmini
        - generic [ref=e81]:
          - generic [ref=e86]:
            - link "Login" [ref=e87] [cursor=pointer]:
              - /url: /login?ret=/
              - img "Login" [ref=e88]
            - img "Chevron" [ref=e90]
          - generic [ref=e95]:
            - link "More" [ref=e96] [cursor=pointer]:
              - /url: "#"
            - img "Chevron" [ref=e98]
          - link "Cart Cart" [ref=e101] [cursor=pointer]:
            - /url: /viewcart?marketplace=FLIPKART
            - img "Cart" [ref=e102]
            - generic [ref=e103]: Cart
      - generic [ref=e105]:
        - link [ref=e110] [cursor=pointer]:
          - /url: https://www.flipkart.com/
          - heading "For You" [level=1] [ref=e113]
        - link "Fashion" [ref=e118] [cursor=pointer]:
          - /url: /ss-26-base-inline-at-store
        - link "Mobiles" [ref=e126] [cursor=pointer]:
          - /url: /mobile-phones-store
        - link "Electronics" [ref=e134] [cursor=pointer]:
          - /url: /new-elec-clp-march-at-store
        - link "Beauty" [ref=e142] [cursor=pointer]:
          - /url: /bpc-bau-new-inline-at-store
        - link "Home" [ref=e150] [cursor=pointer]:
          - /url: /home-kitchen-25-at-store
        - link "Appliances" [ref=e158] [cursor=pointer]:
          - /url: /tv-and-appliances-inline-ab-at-store
        - link "Toys, baby.." [ref=e166] [cursor=pointer]:
          - /url: /toysbc-new26-inline-at-store
        - link "Food & Health" [ref=e174] [cursor=pointer]:
          - /url: /fnhc-2025-new-at-store
        - link "Auto Accessories" [ref=e182] [cursor=pointer]:
          - /url: /aa-2025-new-at-store
        - link "Sports & Fitness" [ref=e190] [cursor=pointer]:
          - /url: /sf-inline-2025-at-store
        - link "Furniture" [ref=e198] [cursor=pointer]:
          - /url: /india-ka-furniture-studio-inlines-at-store
        - link "Books" [ref=e206] [cursor=pointer]:
          - /url: /books-at-store
        - link "2 Wheelers" [ref=e214] [cursor=pointer]:
          - /url: /twowheelers-at-store
    - generic [ref=e222]:
      - generic [ref=e237]:
        - link [ref=e244] [cursor=pointer]:
          - /url: /samsung-galaxy-s25-5g-snapdragon-navy-128-gb/p/itm957543a944c80?pid=MOBHQDMKCCDK2VT7&lid=LSTMOBHQDMKCCDK2VT7FQCGRZ&param=7838&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=KS17DYP4238B_IAD
          - img "Image" [ref=e247]
        - link [ref=e254] [cursor=pointer]:
          - /url: /womens-ethnic-sets/pr?sid=clo%2Ccfv%2Citg%2Ctys&p%5B%5D=facets.occasion%255B%255D%3DFestive%2B%2526%2BParty&p%5B%5D=facets.rating%255B%255D%3D3%25E2%2598%2585%2B%2526%2Babove&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D699&p%5B%5D=facets.fulfilled_by%255B%255D%3DF-Assured&param=332767&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=UY7N75KWFBM0_IAD
          - img "Image" [ref=e257]
        - link [ref=e264] [cursor=pointer]:
          - /url: /motorola-edge-70-pro-tailored-fabric-pantone-titan-blue-256-gb/p/itmabaee92c5d0da?pid=MOBHN973YGSQZH7U&marketplace=FLIPKART&lid=LSTMOBHN973YGSQZH7U8XEYJN&param=09436&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=8UQZMUXFBHBR_AD
          - img "Image" [ref=e267]
        - link [ref=e274] [cursor=pointer]:
          - /url: /ai-nova-2-5g-blue-64-gb/p/itm20a7387042b2c?pid=MOBHKHPYHHSYZWHF&marketplace=FLIPKART&lid=LSTMOBHKHPYHHSYZWHFGIS9RH&fm=organic&pageUID=1792069444850&param=92912&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=EPEY7OZ7K6KC_AD
          - img "Image" [ref=e277]
        - link [ref=e284] [cursor=pointer]:
          - /url: /vivo-s2-fe-stellar-green-128-gb/p/itmaf458fdc4f839?pid=MOBHR8G9CECNFCDY&marketplace=FLIPKART&lid=LSTMOBHR8G9CECNFCDYJJJRZX&pageUID=1792070031812&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=TT0M4ZTK9E8P_AD
          - img "Image" [ref=e287]
        - link [ref=e294] [cursor=pointer]:
          - /url: /j9e/abm/8qx/~cs-w6h4pl4a67/pr?sid=j9e%2Cabm%2C8qx&collection-tab-name=LG+WM+-+FL&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=MCDDROZGEHM1_AD
          - img "Image" [ref=e297]
        - link [ref=e304] [cursor=pointer]:
          - /url: /ilife-t20s-ultra-self-emptying-robot-vacuum-lidar-navigation-strong-suction-robotic-floor-cleaner-reusable-dust-bag-anti-bacterial-cleaning-2-1-mopping-wifi-connectivity-google-assistant-alexa/p/itmcb26c899d2f0b?pid=VCLHPE3BZ9MH74XY&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=1Q1LEHW03LBO_AD
          - img "Image" [ref=e307]
        - link [ref=e314] [cursor=pointer]:
          - /url: /samsung-galaxy-s25-5g-snapdragon-silver-shadow-128-gb/p/itm957543a944c80?pid=MOBHQDMKYG8JCE4R&lid=LSTMOBHQDMKYG8JCE4RZTNP8N&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=PCS6P16TO2XM_AD
          - img "Image" [ref=e317]
        - link [ref=e324] [cursor=pointer]:
          - /url: /nothing-phone-4a-pro-black-128-gb/p/itm4d004931f8d69?pid=MOBHQENATV85KYCZ&marketplace=FLIPKART&lid=LSTMOBHQENATV85KYCZ0HUCMA&param=98532&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=17ZJ0AAUDDQO_AD
          - img "Image" [ref=e327]
        - link [ref=e334] [cursor=pointer]:
          - /url: /6bo/b5g/~cs-qzdh7y4gmn/pr?sid=6bo%2Cb5g&collection-tab-name=+Laptops&sort=price_asc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=EX6XDEGO5IR9_AD
          - img "Image" [ref=e337]
      - link [ref=e359] [cursor=pointer]:
        - /url: /sony-bravia-3-138-8-cm-55-inch-ultra-hd-4k-led-smart-google-tv-dolby-vision-atmos-feature-playstation-5/p/itmc52695a373f8b?pid=TVSHKEW8MG2BPFNY&lid=LSTTVSHKEW8MG2BPFNYTJDAMU&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=8ANDBN8Q8DGY_AD
        - img "Image" [ref=e365]
      - generic [ref=e375]:
        - generic [ref=e379]:
          - img "Image" [ref=e382]
          - generic [ref=e383]: In demand
        - generic [ref=e389]:
          - link "Image Grab Or Gone Under ₹199" [ref=e394] [cursor=pointer]:
            - /url: /all/~cs-cf20393f55174a82f0570aa75ad912b3/pr?sid=4rr%2Ckm5%2Cipq%2Clrv&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJVbmRlciDigrkxOTkiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJwcmljZV9yYW5nZSI6eyJyYW5nZVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJwcmljZV9yYW5nZSIsImluZmVyZW5jZVR5cGUiOiJGQUNFVCIsIm1pbiI6bnVsbCwibWF4IjoxOTkuMCwidmFsdWVUeXBlIjoiUkFOR0VfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJBQ0NIWlNTRktKRVZRWjVZIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiU2NyZWVuIEd1YXJkcyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D
            - img "Image" [ref=e404]
            - generic [ref=e407]:
              - generic [ref=e408]: Grab Or Gone
              - generic [ref=e409]: Under ₹199
          - link "Image In Focus Now Top Rated" [ref=e414] [cursor=pointer]:
            - /url: /all/~cs-69941d8e9630dccc686954070b9b19b1/pr?sid=eat%2Cltb%2Cngb&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJUb3AgUmF0ZWQiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJUb3AgUmF0ZWQiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJOREZHVVhRQUpUMlJRN1BNIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D
            - img "Image" [ref=e424]
            - generic [ref=e427]:
              - generic [ref=e428]: In Focus Now
              - generic [ref=e429]: Top Rated
          - link "Image Women's Ethnic Sets Under ₹599" [ref=e434] [cursor=pointer]:
            - /url: /all/~cs-39a052bd63bf9f31afad9a54272eea5b/pr?sid=clo%2Ccfv%2Citg%2Ctys&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJVbmRlciDigrk1OTkiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJwcmljZV9yYW5nZSI6eyJyYW5nZVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJwcmljZV9yYW5nZSIsImluZmVyZW5jZVR5cGUiOiJGQUNFVCIsIm1pbiI6bnVsbCwibWF4Ijo1OTkuMCwidmFsdWVUeXBlIjoiUkFOR0VfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJFVEhIUE5GSEhNQ0ZURUdXIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiVG9wIFJhdGVkIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D
            - img "Image" [ref=e444]
            - generic [ref=e447]:
              - generic [ref=e448]: Women's Ethnic Sets
              - generic [ref=e449]: Under ₹599
          - link "Image Best Deals Special offer" [ref=e454] [cursor=pointer]:
            - /url: /all/~cs-6fc67abc16ea5d7d201c44b6c0b0a0ad/pr?sid=osp%2Ciko%2C9d5&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJTcGVjaWFsIG9mZmVyIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiV29tZW4ncyBGbGF0cyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IlNOREgzQ1pUQzhHWEhZREgiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19
            - img "Image" [ref=e464]
            - generic [ref=e467]:
              - generic [ref=e468]: Best Deals
              - generic [ref=e469]: Special offer
      - generic [ref=e479]:
        - generic [ref=e483]:
          - img "Image" [ref=e486]
          - generic [ref=e488]:
            - generic [ref=e489]: Must-have Electronics & Appliances
            - link [ref=e491] [cursor=pointer]:
              - /url: /offers-list/recommended-for-you?screen=dynamic&pk=contentTags%3DGCD_THEME_5~marketplace%3DFLIPKART~widgetType%3DdealCardV3~contentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART
        - generic [ref=e498]:
          - link "Image Mobile Body Panels Min. 50% Off" [ref=e503] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-68acdcc00524bb405486423ab89d4b18/pr?sid=tyy,4mr,ukk&marketplace=FLIPKART&restrictLocale=true
            - img "Image" [ref=e513]
            - generic [ref=e516]:
              - generic [ref=e517]: Mobile Body Panels
              - generic [ref=e518]: Min. 50% Off
          - link "Image Power Banks Min. 50% Off" [ref=e523] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-5447acab9094df30966ed1ae80389723/pr?sid=tyy,4mr,fu6&marketplace=FLIPKART&restrictLocale=true
            - img "Image" [ref=e533]
            - generic [ref=e536]:
              - generic [ref=e537]: Power Banks
              - generic [ref=e538]: Min. 50% Off
          - link "Image Mobiles Min. 50% Off" [ref=e543] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-b364eef2a83b8798cb08ea449878c98d/pr?sid=tyy,4io&marketplace=FLIPKART&restrictLocale=true
            - img "Image" [ref=e553]
            - generic [ref=e556]:
              - generic [ref=e557]: Mobiles
              - generic [ref=e558]: Min. 50% Off
          - link "Image Mobile Cables Min. 50% Off" [ref=e563] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-dee36ce9d0ac7d49db5eac76f170a825/pr?sid=tyy,4mr,3nu&marketplace=FLIPKART&restrictLocale=true
            - img "Image" [ref=e573]
            - generic [ref=e576]:
              - generic [ref=e577]: Mobile Cables
              - generic [ref=e578]: Min. 50% Off
      - generic [ref=e588]:
        - generic [ref=e589]: In The Spotlight
        - generic [ref=e595]:
          - generic [ref=e596]:
            - link [ref=e601] [cursor=pointer]:
              - /url: /beauty-and-grooming/~cs-05lawatify/pr?sid=g9b&collection-tab-name=ponds+bright+beauty&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=HHQUJ45JOWS2_AD
              - img "Image" [ref=e604]
            - link [ref=e609] [cursor=pointer]:
              - /url: /beauty-and-grooming/~cs-0waho4boll/pr?sid=g9b&collection-tab-name=nivea+range&sort=recency_desc&p%5B%5D=facets.brand%255B%255D%3DNIVEA&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=5KCE7J4R1JX8_AD
              - img "Image" [ref=e612]
            - link [ref=e617] [cursor=pointer]:
              - /url: /oppo-k14x-5g-icy-blue-64-gb/p/itm188c7a4b69292?pid=MOBHKZF3YEJNPZHZ&marketplace=FLIPKART&lid=LSTMOBHKZF3YEJNPZHZKAKWY1&pageUID=1791812842798&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=MMQ14HYDZFJL_AD
              - img "Image" [ref=e620]
            - link [ref=e625] [cursor=pointer]:
              - /url: /ckf/czl/~cs-s0otj1nerp/pr?sid=ckf%2Cczl&collection-tab-name=LG+UHD+TVs&sort=popularity&param=1791194954725&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=HTMN2Y66XZXY_AD
              - img "Image" [ref=e628]
            - link [ref=e633] [cursor=pointer]:
              - /url: /beauty-and-grooming/~cs-flmpbeudfl/pr?sid=g9b&collection-tab-name=visible+white&sort=recency_desc&param=68643&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=JM85REJCTD3S_AD
              - img "Image" [ref=e636]
            - link [ref=e641] [cursor=pointer]:
              - /url: /realme-p4-5g-steel-grey-128-gb/p/itmf836e6de035a5?pid=MOBHN7A8E2QAXYCZ&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=ZJX412LJ8RP9_AD
              - img "Image" [ref=e644]
            - link [ref=e649] [cursor=pointer]:
              - /url: /6bo/b5g/~cs-3mbcqghuox/pr?sid=6bo%2Cb5g&collection-tab-name=Laptops&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=6CY30BCH14HE_AD
              - img "Image" [ref=e652]
            - link [ref=e657] [cursor=pointer]:
              - /url: /beauty-and-grooming/~cs-dbu0g66kff/pr?sid=g9b&collection-tab-name=piramal+range&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=D9I8KE4FHW1Z_AD
              - img "Image" [ref=e660]
            - link [ref=e665] [cursor=pointer]:
              - /url: /beauty-and-grooming/~cs-ztpql9whpw/pr?sid=g9b&collection-tab-name=Cetaphil+Sun+Mois&pageCriteria=default&sort=recency_desc&p%5B%5D=facets.brand%255B%255D%3DCetaphil&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=U551QPAHCTG3_AD
              - img "Image" [ref=e668]
            - link [ref=e673] [cursor=pointer]:
              - /url: /realme-p4x-5g-matte-silver-128-gb/p/itm575b1540859e4?pid=MOBHN7A8HYC9BPAU&marketplace=FLIPKART&lid=LSTMOBHN7A8HYC9BPAUEQNPRK&hl_lid=LSTMOBHN7A8HYC9BPAULUAKXB&pageUID=1791962649922&param=98878&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=E74BDVVLQG1O_AD
              - img "Image" [ref=e676]
          - button [ref=e677]
      - generic [ref=e689]:
        - generic [ref=e693]:
          - img "Image" [ref=e696]
          - generic [ref=e697]: Top deals on tech
        - generic [ref=e704]:
          - generic [ref=e705]:
            - link [ref=e710] [cursor=pointer]:
              - /url: /apple-iphone-17-lavender-256-gb/p/itm5c650337c09ee?pid=MOBHQV9YDG7CGRAM&marketplace=FLIPKART&lid=LSTMOBHQV9YDG7CGRAMOQWOKL&param=363635
              - img "Image" [ref=e713]
            - link [ref=e718] [cursor=pointer]:
              - /url: /wearable-smart-devices/~cs-695h2109ti/pr?sid=ajy&collection-tab-name=moto+watch&pageCriteria=default&sort=price_asc&p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock&param=66393
              - img "Image" [ref=e721]
            - link [ref=e726] [cursor=pointer]:
              - /url: /televisions/~cs-7jru1mnlh8/pr?sid=ckf%2Cczl&collection-tab-name=55+TVs+HP-1&sort=popularity
              - img "Image" [ref=e729]
            - link [ref=e734] [cursor=pointer]:
              - /url: /6bo/b5g/~cs-g7l1lmzpf5/pr?sid=6bo,b5g&collection-tab-name=HP+15+Core+5&sort=price_asc&PARAM=2883
              - img "Image" [ref=e737]
            - link [ref=e742] [cursor=pointer]:
              - /url: /j9e/m38/hzg/~cs-6w3xz1b6mf/pr?sid=j9e,m38,hzg&collection-tab-name=Refrigerators2&pageCriteria=default
              - img "Image" [ref=e745]
            - link [ref=e750] [cursor=pointer]:
              - /url: /nothing-phone-4b-blue-128-gb/p/itm939608b40adbb?pid=MOBHQENA4YWRRHWE&marketplace=FLIPKART&lid=LSTMOBHQENA4YWRRHWE0IJQMJ&hl_lid=LSTMOBHQENA4YWRRHWEJKNUEM
              - img "Image" [ref=e753]
            - link [ref=e758] [cursor=pointer]:
              - /url: /mobile-accessories/~cs-2jdblwzc7p/pr?sid=tyy%2C4mr%2Cfu6&collection-tab-name=compact&sort=price_asc
              - img "Image" [ref=e761]
            - link [ref=e766] [cursor=pointer]:
              - /url: /google-pixel-11-frost-256-gb/p/itmc51935a8001b1?pid=MOBHPHNVEC2P4WV3&lid=LSTMOBHPHNVEC2P4WV3UCPNQ6
              - img "Image" [ref=e769]
            - link [ref=e774] [cursor=pointer]:
              - /url: /jek/~cs-kmfjyawkqz/pr?sid=jek&collection-tab-name=Cam-gimbals
              - img "Image" [ref=e777]
            - link [ref=e782] [cursor=pointer]:
              - /url: /home-kitchen/home-appliances/washing-machines/fully-automatic-top-load~function/pr?sid=j9e%2Cabm%2C8qx
              - img "Image" [ref=e785]
          - button "Next Slide" [ref=e786]
      - generic [ref=e800]:
        - generic [ref=e804]:
          - img "Image" [ref=e807]
          - generic [ref=e808]: Trends you may like
        - generic [ref=e814]:
          - link "Image PennyLoafer" [ref=e820] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-4c1f578349df8d028fb51fd04bd42966/pr?sid=osp,cil,e1f&marketplace=FLIPKART
            - generic [ref=e821]:
              - img "Image" [ref=e829]
              - generic [ref=e832]: PennyLoafer
          - link "Image WideLeg" [ref=e841] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-e4e386f4fc2f4441bf86dc858accf11e/pr?sid=clo,vua,k58&marketplace=FLIPKART
            - generic [ref=e842]:
              - img "Image" [ref=e850]
              - generic [ref=e853]: WideLeg
          - link "Image RetroRunners" [ref=e862] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-6787db1c1f6d8ceb5941d06b979b0eed/pr?sid=osp,cil,1cu&marketplace=FLIPKART
            - generic [ref=e863]:
              - img "Image" [ref=e874]
              - generic [ref=e877]: RetroRunners
          - link "Image Studded" [ref=e886] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-7ca909a79ca7a4563f38df83df79cd68/pr?sid=r18,f13&marketplace=FLIPKART
            - generic [ref=e887]:
              - img "Image" [ref=e895]
              - generic [ref=e898]: Studded
      - generic [ref=e913]:
        - generic [ref=e914]:
          - link "Image Credit Card" [ref=e919] [cursor=pointer]:
            - /url: https://www.flipkart.com/fpg/cbc/store-page?productType=CC&utm_source=Allcat_OTA&utm_source_context=Allcat_nav&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkNyZWRpdCBDYXJkIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D
            - img "Image" [ref=e922]
            - generic [ref=e923]: Credit Card
          - link "Image EMI" [ref=e928] [cursor=pointer]:
            - /url: https://www.flipkart.com/rv/fpg/cfa/ntb/ce?emiType=cfa-term-loan&productCode=CREDIT_MARKETPLACE&utmSource=ADS&utmContext=FKEMI_Nav&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkVNSSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D
            - img "Image" [ref=e931]
            - generic [ref=e932]: EMI
          - link "Image Pay Later" [ref=e937] [cursor=pointer]:
            - /url: https://www.flipkart.com/rv/fpg/bnpl?utmSource=fk-fpl107&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlBheSBMYXRlciJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D
            - img "Image" [ref=e940]
            - generic [ref=e941]: Pay Later
          - link "Image 2 Wheelers" [ref=e946] [cursor=pointer]:
            - /url: /7dk/0aj/~cs-l0abbrtwvr/pr?sid=7dk%2C0aj&collection-tab-name=Top+Deals+on+Bikes+and+Scooters&pageCriteria=default&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIjIgV2hlZWxlcnMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19
            - img "Image" [ref=e949]
            - generic [ref=e950]: 2 Wheelers
          - link "Image Loans" [ref=e955] [cursor=pointer]:
            - /url: https://www.flipkart.com/sumo-3p/pl/pages/journey?utm_source=Home_Page&utm_campaign=Nav_Base&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkxvYW5zIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D
            - img "Image" [ref=e958]
            - generic [ref=e959]: Loans
          - link "Image Gift Cards" [ref=e964] [cursor=pointer]:
            - /url: /gift-card-at-store?param=7654567&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkdpZnQgQ2FyZHMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19
            - img "Image" [ref=e967]
            - generic [ref=e968]: Gift Cards
          - link "Image Sell Phone" [ref=e973] [cursor=pointer]:
            - /url: /reset-sell-store?param=3382&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlNlbGwgUGhvbmUiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19
            - img "Image" [ref=e976]
            - generic [ref=e977]: Sell Phone
          - link "Image SuperCoin" [ref=e982] [cursor=pointer]:
            - /url: /supercoin?param=76523&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlN1cGVyQ29pbiJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D
            - img "Image" [ref=e985]
            - generic [ref=e986]: SuperCoin
          - link "Image BLACK" [ref=e991] [cursor=pointer]:
            - /url: /flipkart-black-store?param=389440&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkJMQUNLIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D
            - img "Image" [ref=e994]
            - generic [ref=e995]: BLACK
          - link "Image Pay" [ref=e1000] [cursor=pointer]:
            - /url: /flipkart-pay-at-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlBheSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D
            - img "Image" [ref=e1003]
            - generic [ref=e1004]: Pay
          - link "Image For GenZ" [ref=e1009] [cursor=pointer]:
            - /url: /ls-tbbd-26-genz-men-inline-at-store?param=345678&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkZvciBHZW5aIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D
            - img "Image" [ref=e1012]
            - generic [ref=e1013]: For GenZ
          - link "Image Originals" [ref=e1018] [cursor=pointer]:
            - /url: /flipkart-originals-large-at-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIk9yaWdpbmFscyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D
            - img "Image" [ref=e1021]
            - generic [ref=e1022]: Originals
          - link "Image Vouchers" [ref=e1027] [cursor=pointer]:
            - /url: /bv1-gift-card-at-store?param=4264&pageUID=1791823084665&param=787193&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlZvdWNoZXJzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D
            - img "Image" [ref=e1030]
            - generic [ref=e1031]: Vouchers
          - link "Image Next Gen" [ref=e1036] [cursor=pointer]:
            - /url: /nextgen-brands-spl-store?param=7478&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIk5leHQgR2VuIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D
            - img "Image" [ref=e1039]
            - generic [ref=e1040]: Next Gen
        - button [ref=e1041]
      - generic [ref=e1053]:
        - generic [ref=e1054]: Featured Brands
        - generic [ref=e1060]:
          - generic [ref=e1061]:
            - link [ref=e1066] [cursor=pointer]:
              - /url: /water-purifiers/~cs-tf90uvo8ni/pr?sid=j9e%2Cabm%2Ci45&collection-tab-name=EFL+-+WAP&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=Q6IX8RFSEEHF_AD
              - img "Image" [ref=e1069]
            - link [ref=e1074] [cursor=pointer]:
              - /url: /beauty-and-grooming/hair-care-and-accessory/hair-care/pr?sid=g9b%2Clcf%2Cqqm&marketplace=FLIPKART&p%5B%5D=facets.brand%255B%255D%3DPilgrim&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=LM8HP0R0V598_AD
              - img "Image" [ref=e1077]
            - link [ref=e1082] [cursor=pointer]:
              - /url: /food-products/~cs-lsst03s093/pr?sid=eat&collection-tab-name=Happilo&sort=recency_desc&param=56789&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=HJR8F4ESOM0K_AD
              - img "Image" [ref=e1085]
            - link [ref=e1090] [cursor=pointer]:
              - /url: /bosch-302-l-frost-free-triple-door-3-star-convertible-refrigerator/p/itm63068f1cc4660?pid=RFRHR37RYGJXF5SR&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=EB04Y0RIW4QW_AD
              - img "Image" [ref=e1093]
            - link [ref=e1098] [cursor=pointer]:
              - /url: /j9e/abm/i45/~cs-j9v5z1z9a8/pr?sid=j9e%2Cabm%2Ci45&collection-tab-name=NATIVE+-+WAP&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=4NQ32QPCAJ5C_AD
              - img "Image" [ref=e1101]
            - link [ref=e1106] [cursor=pointer]:
              - /url: /1mt/~cs-moqjy2mr4w/pr?sid=1mt&collection-tab-name=70MAI&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=XHXAMQ0IE9FD_AD
              - img "Image" [ref=e1109]
            - link [ref=e1114] [cursor=pointer]:
              - /url: /eat/~cs-mmvvfdwdrg/pr?sid=eat&collection-tab-name=Yogabar3&param=2331&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=J2MULKGMTEU3_AD
              - img "Image" [ref=e1117]
            - link [ref=e1122] [cursor=pointer]:
              - /url: /clothing-and-accessories/topwear/tshirts/pr?sid=clo%2Cash%2Cank&p%5B%5D=facets.brand%255B%255D%3DJOCKEY&p%5B%5D=facets.ideal_for%255B%255D%3DMen&otracker=categorytree&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=7UMH77DCDV0F_AD
              - img "Image" [ref=e1125]
            - link [ref=e1130] [cursor=pointer]:
              - /url: /g9b/~cs-tg7uv7969g/pr?sid=g9b&collection-tab-name=santoor&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=55EX16TT4XH2_AD
              - img "Image" [ref=e1133]
            - link [ref=e1138] [cursor=pointer]:
              - /url: /g9b/~cs-9z7kgh77hx/pr?sid=g9b&collection-tab-name=ketalysst&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=MM546XNI4ISV_AD
              - img "Image" [ref=e1141]
          - button [ref=e1142]
      - generic [ref=e1154]:
        - generic [ref=e1155]: Ace brands
        - generic [ref=e1160]:
          - link [ref=e1165] [cursor=pointer]:
            - /url: /ai-nova-2-power-5g-midnight-black-128-gb/p/itm927158536cdda?pid=MOBHQZVXNRQKMMTQ&marketplace=FLIPKART&lid=LSTMOBHQZVXNRQKMMTQDUNCJJ&pageUID=1791054888610&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=DNJCAEEKMM20_AD
            - img "Image" [ref=e1168]
          - link [ref=e1173] [cursor=pointer]:
            - /url: /boltt-ace-5g-midnight-black-128-gb/p/itm2eb0f483effdd?pid=MOBHPP59NXHEUHZ9&marketplace=FLIPKART&lid=LSTMOBHPP59NXHEUHZ9LFBEFO&pageUID=1791969473308&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=WZBFO42S81SC_AD
            - img "Image" [ref=e1176]
          - link [ref=e1181] [cursor=pointer]:
            - /url: /beauty-and-grooming/~cs-z91cl7wlev/pr?sid=g9b&collection-tab-name=total&sort=recency_desc&param=1791047791819&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=IQVDM7FS62ET_AD
            - img "Image" [ref=e1184]
      - generic [ref=e1186]: Hang on, loading content
      - generic [ref=e1200]:
        - generic [ref=e1201]: Flipkart - Your go-to place for Online Shopping
        - generic [ref=e1202]: +
      - contentinfo [ref=e1203]:
        - generic [ref=e1205]:
          - generic [ref=e1206]:
            - generic [ref=e1207]:
              - generic [ref=e1208]: ABOUT
              - link "Contact Us" [ref=e1209] [cursor=pointer]:
                - /url: /helpcentre?otracker=footer_navlinks
              - link "About Us" [ref=e1210] [cursor=pointer]:
                - /url: https://corporate.flipkart.net/corporate-home
              - link "Careers" [ref=e1211] [cursor=pointer]:
                - /url: https://www.flipkartcareers.com/?otracker=footer_navlinks
              - link "Flipkart Stories" [ref=e1212] [cursor=pointer]:
                - /url: http://stories.flipkart.com/?otracker=footer_navlinks
              - link "Press" [ref=e1213] [cursor=pointer]:
                - /url: http://stories.flipkart.com/category/top-stories/news/
              - link "Corporate Information" [ref=e1214] [cursor=pointer]:
                - /url: /corporate-information
            - generic [ref=e1215]:
              - generic [ref=e1216]: GROUP COMPANIES
              - link "Myntra" [ref=e1217] [cursor=pointer]:
                - /url: https://www.myntra.com/
              - link "Cleartrip" [ref=e1218] [cursor=pointer]:
                - /url: https://www.cleartrip.com/
              - link "Shopsy" [ref=e1219] [cursor=pointer]:
                - /url: https://www.shopsy.in
            - generic [ref=e1220]:
              - generic [ref=e1221]: HELP
              - link "Payments" [ref=e1222] [cursor=pointer]:
                - /url: /pages/payments
              - link "Shipping" [ref=e1223] [cursor=pointer]:
                - /url: /pages/shipping
              - link "Cancellation & Returns" [ref=e1224] [cursor=pointer]:
                - /url: /helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG
              - link "FAQ" [ref=e1225] [cursor=pointer]:
                - /url: /helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG
            - generic [ref=e1226]:
              - generic [ref=e1227]: CONSUMER POLICY
              - link "Cancellation & Returns" [ref=e1228] [cursor=pointer]:
                - /url: /pages/returnpolicy?otracker=footer_navlinks
              - link "Terms Of Use" [ref=e1229] [cursor=pointer]:
                - /url: /pages/terms?otracker=footer_navlinks
              - link "Security" [ref=e1230] [cursor=pointer]:
                - /url: /pages/paymentsecurity?otracker=footer_navlinks
              - link "Privacy" [ref=e1231] [cursor=pointer]:
                - /url: /pages/privacypolicy?otracker=footer_navlinks
              - link "Sitemap" [ref=e1232] [cursor=pointer]:
                - /url: /sitemap?otracker=footer_navlinks
              - link "Grievance Redressal" [ref=e1233] [cursor=pointer]:
                - /url: /pages/grievance-redressal-mechanism?otracker=footer_navlinks
              - link "EPR Compliance" [ref=e1234] [cursor=pointer]:
                - /url: /pages/ewaste-compliance-tnc?otracker=footer_navlinks
              - link "FSSAI Food Safety Connect App" [ref=e1235] [cursor=pointer]:
                - /url: https://fssai.gov.in/cms/food-safety-connect.php
            - generic [ref=e1236]:
              - generic [ref=e1237]: "Mail Us:"
              - generic [ref=e1238]:
                - paragraph [ref=e1239]: Flipkart Internet Private Limited,
                - paragraph [ref=e1240]: Buildings Alyssa, Begonia &
                - paragraph [ref=e1241]: Clove Embassy Tech Village,
                - paragraph [ref=e1242]: Outer Ring Road, Devarabeesanahalli Village,
                - paragraph [ref=e1243]: Bengaluru, 560103,
                - paragraph [ref=e1244]: Karnataka, India
              - generic [ref=e1245]: "Social:"
              - generic [ref=e1246]:
                - link "Facebook" [ref=e1248] [cursor=pointer]:
                  - /url: https://www.facebook.com/flipkart
                  - img "Facebook" [ref=e1249]
                - link "Twitter" [ref=e1251] [cursor=pointer]:
                  - /url: https://www.twitter.com/flipkart
                  - img "Twitter" [ref=e1252]
                - link "YouTube" [ref=e1254] [cursor=pointer]:
                  - /url: https://www.youtube.com/flipkart
                  - img "YouTube" [ref=e1255]
                - link "Instagram" [ref=e1257] [cursor=pointer]:
                  - /url: https://www.instagram.com/flipkart
                  - img "Instagram" [ref=e1258]
            - generic [ref=e1259]:
              - generic [ref=e1260]: "Registered Office Address:"
              - generic [ref=e1261]:
                - paragraph [ref=e1262]: Flipkart Internet Private Limited,
                - paragraph [ref=e1263]: Buildings Alyssa, Begonia &
                - paragraph [ref=e1264]: Clove Embassy Tech Village,
                - paragraph [ref=e1265]: Outer Ring Road, Devarabeesanahalli Village,
                - paragraph [ref=e1266]: Bengaluru, 560103,
                - paragraph [ref=e1267]: Karnataka, India
                - paragraph [ref=e1268]: "CIN : U51109KA2012PTC066107"
                - paragraph
                - paragraph [ref=e1269]:
                  - text: "Telephone:"
                  - link "044-45614700" [ref=e1270] [cursor=pointer]:
                    - /url: tel:044-45614700
                  - text: /
                  - link "044-67415800" [ref=e1271] [cursor=pointer]:
                    - /url: tel:044-67415800
          - generic [ref=e1272]:
            - generic [ref=e1273]:
              - img "Become a Seller" [ref=e1274]
              - link "Become a Seller" [ref=e1275] [cursor=pointer]:
                - /url: https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect
            - generic [ref=e1276]:
              - img "Advertise" [ref=e1277]
              - generic "Advertise" [ref=e1278]
            - generic [ref=e1279]:
              - img "Gift Cards" [ref=e1280]
              - link "Gift Cards" [ref=e1281] [cursor=pointer]:
                - /url: /the-gift-card-store?otracker=footer_navlinks
            - generic [ref=e1282]:
              - img "Help Center" [ref=e1283]
              - link "Help Center" [ref=e1284] [cursor=pointer]:
                - /url: /helpcentre?otracker=footer_navlinks
            - generic [ref=e1285]: © 2007-2026 Flipkart.com
            - img "Payment methods"
  - contentinfo
  - generic [ref=e1287]:
    - button "✕" [ref=e1288] [cursor=pointer]
    - generic [ref=e1290]:
      - generic [ref=e1291]:
        - generic [ref=e1292]: Login
        - paragraph [ref=e1293]: Get access to your Orders, Wishlist and Recommendations
      - generic [ref=e1296]:
        - generic [ref=e1298]:
          - generic [ref=e1299]: Log in for the best experience
          - generic [ref=e1300]: Enter your phone number to continue
          - generic [ref=e1301]:
            - button "+91" [ref=e1302]
            - spinbutton "Phone Number" [active] [ref=e1305]
            - generic: Phone Number
          - generic [ref=e1306]:
            - paragraph
          - generic [ref=e1307]:
            - paragraph
          - generic [ref=e1308]: Use Email-ID
        - generic [ref=e1311]:
          - text: By continuing, you confirm that you are above 18 years of age, and you agree to the Flipkart's
          - link "Terms of Use" [ref=e1312] [cursor=pointer]:
            - /url: https://www.flipkart.com/pages/terms
          - text: and
          - link "Privacy Policy" [ref=e1313] [cursor=pointer]:
            - /url: https://www.flipkart.com/pages/privacypolicy
        - button "Continue" [disabled] [ref=e1316]
```

# Test source

```ts
  1  | import{test,expect, Locator} from '@playwright/test'
  2  | 
  3  | test.describe("SVG Elements", ()=>
  4  | {
  5  | 
  6  |     test.beforeEach(async({page}) =>
  7  |     {
  8  |         const url="https://www.flipkart.com/";
  9  |         console.log("Before Running any test case")
  10 |         await page.goto(url);
  11 |     })
  12 | 
  13 |     test("Verify the SVG Elements", async({page}) =>
  14 |     {
  15 |          await page.locator("input[name='q']").first().fill("macmini");
  16 |          const svgElements: Locator = page.locator("svg");
> 17 |          await svgElements.first().click();
     |                                    ^ Error: locator.click: Test timeout of 30000ms exceeded.
  18 | 
  19 |          await page.locator(".b3wTlE").click();
  20 |          const titleResults: Locator=page.locator("//div[contains(@data-id,'MPC') or contains(@data-id,'COM') or contains(@data-id,'AIO')]/div/a[2]");
  21 | 
  22 |          const count:number=await titleResults.count();
  23 | 
  24 |          for(let i=0;i<count;i++)
  25 |          {
  26 |            const title:String | null=await titleResults.nth(i).textContent();
  27 |            console.log(title);
  28 |          }
  29 | 
  30 |          await page.pause();
  31 | 
  32 |     }
  33 |     )
  34 |    
  35 | })
```