export type App = {
  id: string;
  name: string;
  tagline: string;
  shortDescription: string;
  description: string;
  features: string;
  logoUrl: string;
  storeUrl: {
    apple?: string;
    android?: string;
  }
}

export const apps: App[] = [
  {
    id: "vidya-sakha",
    name: "Vidya Sakha",
    tagline: "Towards Digitalization",
    shortDescription: "An Ed-Tech platform to facilitate online learning with utmost security and privacy",
    description: "Our first app towards catering to the educational needs of India & The World..., Vidya-Sakha, as the name says , is a helpful app with simple user interface for teachers and students. It provides a better platform to connect students and Teachers.",
    features: "•Create Classroom, Digitally - Users can create their own Classrooms and can add students as well as other Teachers. Classrooms help you to organize the workflow.\n\n•Give Assignments, Homework - Users can give assignments and homework to the classrooms they have created or to which they are a part of As a Teacher. Assignments as well as Homework can contain Images and Documents and can be provided with a deadline to submit.\n\n•Video Lectures - Users can send the Video Lecture links to the classrooms they have created or to the classrooms they are a part of As A Teacher.Users can play YouTube Videos in Vidya-Sakha itself or choose to play them in YouTube App.\n\n•Messages, In Class - Users can message students in the classroom and students can ask doubts to teachers in the classroom itself. Students/Teachers can attach pictures, documents as per their needs to make understand better.\n\nDownload this entirely Made in India App for a smooth Teaching-Learning experience.",
    logoUrl: "/images/logos/vidya-sakha.png",
    storeUrl: {
      android: "https://play.google.com/store/apps/details?id=dev.nbrg.vidya_sakha"
    }
  },
  {
    id: "n-translate",
    name: "N-Translate",
    tagline: "Translate More, Connect Better",
    shortDescription: "An App to provide you with Swift translations to bridge the language barrier.",
    description: "N-Translate is a smart translator app, which can translate between 70+ languages, and is Security and Privacy Centric. This app can give you smart replies and Image OCR Translations!",
    features: "•Transalte Text: The app can translate texts from 70+ languages directly through your keyboard.\n\n•OCR Text Translation: Point and translate any text through the app using your device's camera\n\n•Secure On-Device Translations\n\n•Offline: The app translates the text offline, after you have downloaded the language models once.",
    logoUrl: "/images/logos/n-translate.png",
    storeUrl: {}
  },
  {
    id: "data-store",
    name: "Data-Store",
    tagline: "The One Stop Data Storage Solution",
    shortDescription: "An App where you can store your important data.",
    description: "Data Store can store files in the format of .png, .jpeg/.jpg, .webp, .gif and .pdf files, with support for more coming soon. This app has been developed in-house by us. You can store documents such as vaccine certificates, educational certificates, IDs, etc. You can enable fingerprint/passcode auth to not allow unauthorised access to your info. This data is stored on your devices, and never synced with any cloud/internet based services. We do not show any Ads as we believe some apps should not show ads, like this one!",
    features: "•Multiple Format Support: Store files in the format of .png, .jpeg/.jpg, .webp, .gif and .pdf\n\n•Secure & Encrypted Storage: The files you put are encrypted and stored on your device\n\n•Offline Storage: The files are never uploaded to cloud or any servers, hence, your files are inherently safe.\n\n•Biometric Authentication: The app can only be unlocked upon biometric authentication or by using pin/password/pattern.",
    logoUrl: "/images/logos/data-store.png",
    storeUrl: {
      android: "https://play.google.com/store/apps/details?id=group.nbrg.dev.safe_data_store",
    }
  },
  {
    id: "n-diary",
    name: "N-Diary",
    tagline: "Safe, Simple, Offline, Secure Diary",
    shortDescription: "An offline diary app along with option to censor text with fingerprint authentication.",
    description: "We all know how various factors in the social media have negatively affected the mental health of people, and as such, many people don't have someone to talk to, or more simply, they don't want to talk to someone, as they don't want them to worry about the said person. And as such, this has promoted an unhealthy habit of suppressing emotions and feelings. And there are also trust issues that befall people when it comes to sharing emotions, feelings, and crucial details about themselves.\n\nSomething needs to be done about this, and we have done it. Presenting N-Diary, a new app from NBRG Developers, which intends to give people someone to talk to. Of course, there is no AI or ML, and this is simple app where users can share their day, or what they feel like, to a digital diary, whose data is stored only on their device.\n\nThis creates a great and healthy habit of diary writing and as such has a lot of benefits for the mental health of its users. It enables the users to share what they feel without the worries of it.",
    features: "•The app is offline, which does not share any of your information to any servers or cloud, and as such, is inherently secure.\n\n•The app allows its users to select a mood based on how their day is going, and then users can write about the day, or what they feel, or whatever they want to write about.\n\n•The app also has text formatting features, where the users can:\n1. Bold the Text\n2. Italicize the Text\n3. Add Links to the Text\n\n•The app has a feature wherein the user can mark parts of their entry as censored.\n\n•Only when the user authenticates themselves, are the censored parts shown, otherwise the censored parts are kept hidden.\n\n•The users can also review their daily entries in the 'My Journal' section of the app.",
    logoUrl: "/images/logos/n_diary.png",
    storeUrl: {
      android: "https://play.google.com/store/apps/details?id=dev.nbrg.n_diary",
    }
  }
];