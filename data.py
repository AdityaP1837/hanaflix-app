import requests
import random

class HanimeBrain:
    def __init__(self):
        self.BASE_URL = "https://hanime.tv/api/v8"
        self.fake = [
            {'X-Signature-Version': 'web2', 'X-Signature': '2febd70a4cb21ebd0f70e50134abdeefd03c95c807cdc137f0f7faa5fc8ad0dc', 'User-Agent': 'Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US) AppleWebKit/528.16 (KHTML, like Gecko) Version/4.0 Safari/528.16'},
            {'X-Signature-Version': 'web2', 'X-Signature': '48c2f5cb5906e9f0d65fd885a35ad85dac410c006324303dbf5f205322f647de', 'User-Agent': 'Mozilla/5.0 (X11; Linux i686 on x86_64; rv:5.0a2) Gecko/20110524 Firefox/5.0a2'},
            {'X-Signature-Version': 'web2', 'X-Signature': '86d6b47b120095de16fcb81c8af35976907ec06f44037410379964f987258750', 'User-Agent': 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; sv-se) AppleWebKit/312.8 (KHTML, like Gecko) Safari/312.5'},
            {'X-Signature-Version': 'web2', 'X-Signature': '09a39dd1256abba04891b70baadd3f5601cec9555c94458005b7e69366b1944e', 'User-Agent': 'Mozilla/5.0 (X11; CrOS i686 1193.158.0) AppleWebKit/535.7 (KHTML, like Gecko) Chrome/16.0.912.75 Safari/535.7'},
            {'X-Signature-Version': 'web2', 'X-Signature': 'bde2ed79580fcc353b6f35faef32f3944a4cb2117671e033fa013eca97fb2453', 'User-Agent': 'Mozilla/5.0 (X11; U; Linux x86_64; fi-FI; rv:1.9.0.8) Gecko/2009032712 Ubuntu/8.10 (intrepid) Firefox/3.0.8'},
            {'X-Signature-Version': 'web2', 'X-Signature':'1dc32bfd2d684940d7a99c7a9ca0a5a5afbf8debdb26103cc3c2d98d4a212470', 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.8810.3391 Safari/537.36 Edge/18.14383'},
            {'X-Signature-Version': 'web2', 'X-Signature': '5e17b06322f2e933ddf83398173643ed4f94269cdbcaea8533d052366865f095', 'User-Agent': 'Opera/9.26 (Macintosh; PPC Mac OS X; U; en)'},
            {'X-Signature-Version': 'web2', 'X-Signature': '15910be54ee276819f01642228961050f5f7dfe1bffee2a6e39265815c1145f4', 'User-Agent': 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.2; .NET CLR 1.1.4322; InfoPath.2; .NET CLR 2.0.50727; .NET CLR 3.0.04506.648; .NET CLR 3.5.21022; FDM)'},
            {'X-Signature-Version': 'web2', 'X-Signature': '1e7fe313b171c2a50e09461f5fd98911de86959b5976fc4447a1b9d069ba90eb', 'User-Agent': 'Mozilla/3.0 (compatible; MSIE 3.0; Windows NT 5.0)'},
            {'X-Signature-Version': 'web2', 'X-Signature': '890c1a05706d62a861ee3aea2bb6f334535e1477953a63c03db52c68e2079a47', 'User-Agent': 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.9200'}, 
        ]

    def getData(self, url):
        headers = random.choice(self.fake)
        response = requests.get(self.BASE_URL + url, headers=headers)
        return response

    def getTrending(self, time, page):
        timeAll = ["daily", "weekly", "monthly", "quarterly","semi-annually", "yearly"]
        if(time in timeAll):
            url = self.BASE_URL + f"/browse-trending?time={time}&page={page}&order_by=views&ordering=desc"
            response = self.getData(url)
            return response.json()
        return 0

    def getBrowse(self):
        response = self.getData("/browse")
        return response.json()

    def getImages(self, tagArray):
        tags = [f"channel_name__in[]={tag}" for tag in tagArray ]
        tagsString = '&'.join(tags)
        url = f"https://community-uploads.highwinds-cdn.com/api/v9/community_uploads?{tagsString}&query_method=offset&__offset=0&loc=https://hanime.tv"
        response = self.getData(url)
        return response.json()

    def getBrowseTags(self, tags, page):
        url = self.BASE_URL + f"/browse/hentai-tags/{tags}?page={page}&order_by=created_at_unix&ordering=desc"
        response = self.getData(url)
        return response.json()
    
    def getVideo(self, slug):
        url = self.BASE_URL + f"/video?id={slug}"
        response = self.getData(url)
        return response.json()
    
    # def getSearch(self, query, page):
    #     headers = {"X-Signature-Version": "web2", "X-Signature": secrets.token_hex(32), "User-Agent": UserAgent().random}
    #     data = {
    #         "search_text": query,
    #         "tags": [],
    #         "brands": [],
    #         "blacklist": [],
    #         "order_by": [],
    #         "ordering": [],
    #         "page": page
    #     }
    #     response = requests.post("https://search.htv-services.com", headers=headers, json=data)
    #     responseJson = response.json()
    #     # responseJson = {
    #     #     "page": responseJson["page"],
    #     #     "nbPages": responseJson("nbPages"),
    #     #     "nbHits": responseJson("nbHits"),
    #     #     "hitsPerPage": responseJson("hitsPerPage"),
    #     #     "hits": json.loads(responseJson("hits")) 
    #     # }
    #     return responseJson
