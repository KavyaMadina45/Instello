import PostCard from "./PostCard";

const posts = [
  { id: 1, type: "image", src: "https://res.cloudinary.com/dwc7zolv7/image/upload/v1765294488/dp4_goybem.jpg" },
  { id: 2, type: "video", src: "https://res.cloudinary.com/dwc7zolv7/video/upload/v1765292640/Ninnu_kori_movie_Heart_touching_what_s_up_status_irraik.mp4" },
  { id: 3, type: "image", src: "https://res.cloudinary.com/dwc7zolv7/image/upload/v1765293635/girldp_yjy4vf.png" },
  { id: 4, type: "image", src: "https://res.cloudinary.com/dwc7zolv7/image/upload/v1765295708/dp6_yp9cat.jpg" },
  { id: 5, type: "video", src: "https://res.cloudinary.com/dwc7zolv7/video/upload/v1765381398/Manasuna_unnadhi.._%EF%B8%8F_jhchnj.mp4" },
  {id :6,type:"image",src:"https://res.cloudinary.com/dwc7zolv7/image/upload/v1765519909/jyo_nlpa3g.jpg"},
  {id:7,type:"image",src:"https://res.cloudinary.com/dwc7zolv7/image/upload/v1765379949/Screenshot_from_2025-12-10_20-48-45_bdikze.png"},
  {id:8,type:"video",src:"https://res.cloudinary.com/dwc7zolv7/video/upload/v1764568271/lion_attitude_xpo71m.mp4"},
  {id:9 ,type:"image",src:"https://res.cloudinary.com/dwc7zolv7/image/upload/v1764492583/instagram-dp10_bpb2sy.jpg"},
  {id:10,type:"video",src:"https://res.cloudinary.com/dwc7zolv7/video/upload/v1764495889/funny_etgfjr.mp4"},
  {id:11,type:"image",src:"https://res.cloudinary.com/dwc7zolv7/image/upload/v1764398093/profile3_storypage_qyf6t3.png"},
  {id:12,type:"image",src:"https://res.cloudinary.com/dwc7zolv7/image/upload/v1764395401/suggest_profile2_vyzd5h.jpg"},
  {id:13,type:"video",src:"https://res.cloudinary.com/dwc7zolv7/video/upload/v1765382484/Breakup_scene_remo_whatsapp_status_sitfsg.mp4"},
  {id:14,type:"image",src:"https://res.cloudinary.com/dwc7zolv7/image/upload/v1765722112/Screenshot_from_2025-12-14_19-46-38_iykxo7.png"},
];

export default function ExploreGrid() {
  return (
    <div className="columns-3 gap-2 px-2 cursor-pointer">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
