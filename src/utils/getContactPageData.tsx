import { IconLink } from "./getAboutPageData"

export interface ContactPageData {
  mainContent: string
  iconLinks: IconLink[]
}

export function getContactPageData(): ContactPageData | undefined {
  const contactPageData: ContactPageData = {
    mainContent:
      "<h1>Contact</h1><p>If you really want to know the person behind the screen,  it’s Eve Lyon, a writer and painter with an affinity to (). This blog was made as an (), a (), and I thank you immensely for giving it your attention.</p><br/><p><b>Diary of an Existentialist</b> is a blog, diary, memoir- whatever you want to call it- that focuses on art, poetry, womanhood, and whatever else the human experience throws at me. I hope you enjoy your time here.</p>",
    iconLinks: [
      {
        imageLink:
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
        imageUrl:
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
        imageWidth: 100,
        imageHeight: 100,
        imageDescription: "Image description",
      },
      {
        imageLink:
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
        imageUrl:
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
        imageWidth: 100,
        imageHeight: 100,
        imageDescription: "Image description",
      },
    ],
  }

  return contactPageData
}
