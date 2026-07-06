export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  images?: string[];
  hoverImage?: string;
  description: string;
  specs: string[];
  status?: string;
  sizes: string[];
  soldOut?: boolean;
}

export const products: Product[] = [
  {
    id: "magician-trucker-v1",
    name: "Magician Trucker / V1",
    price: 675000,
    category: "Trucker Hats",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDD_js2vwUfT-p58wdm5Ph7aEhWLb7AyFKKMA8fpxeBHYlW9ZDAS5-xSMGJnQ-pPF_yTFOAaFtndEHy0ocKMrLFkvdYeZiiA4uLJ4fmpme2QyBQF9bIwTeQt019HMJqudAch0OwgQKNb2baUdz9Jf9JHB_kbtJzwgc8C4mlPly1DZCl8NoM_JeKCCK1sNMWad0-J7zuRQDULW4Gr1T2XSjHaa0QkTsDI-ALlB4nnOhGHO2jU-eq2MY8YMX06w2_9_7Dd-33iqMtg0o",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDD_js2vwUfT-p58wdm5Ph7aEhWLb7AyFKKMA8fpxeBHYlW9ZDAS5-xSMGJnQ-pPF_yTFOAaFtndEHy0ocKMrLFkvdYeZiiA4uLJ4fmpme2QyBQF9bIwTeQt019HMJqudAch0OwgQKNb2baUdz9Jf9JHB_kbtJzwgc8C4mlPly1DZCl8NoM_JeKCCK1sNMWad0-J7zuRQDULW4Gr1T2XSjHaa0QkTsDI-ALlB4nnOhGHO2jU-eq2MY8YMX06w2_9_7Dd-33iqMtg0o",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-RTi-j7Ek-tXGLY27wGsd8VpqXakS1UInbGWxkbo-VEz-wLdQSgjfVPi1SxX34d3PtXwuKRYttXhDYSCAyaYLDOFf1wEzjhMmFQ4OQY312WHSKqudhvYizUPc_5hVzoNdYYnTe2k6sLzOXZqrFICU7YdxHP8zcSwxeyJHIHbwJocOrscTfOgRId6jAIU1tHhke47h9efM1vIxE-8689lWDl353pLmqRsxTFwKtQmBlqCMz-V5P2xUrJ_YtoCinyJcKtq_5mjaoIc",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAIsga0XkO_uNjD0_o__pODfye5u4dKF5k8AJu9zKmGZMq5kgUY7v2Vd2otqf0VYYRWUOX7LVox2_QbmP-WakW-cov_wa1VX6-cvCuE4dS7NmmbubjnJEZwa-zB4gw8_sXA6ZR91EiNvtuyHW5bYFeED5NBax195okiWt7dLWNAhBHDmI7kGelw3vaIlcJijqlT7kbeRclV1oKXOBdDvtS4NWEXMHf0MTb1u0Bd-n1n5CMBQ7UJDTOEBF0ixR2Vhh_9FnRnAvDW8iU",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBpJIeCyrmF1jyR1yhVY5EIOdv9cTlc5rm9OZkj7BrXEOJyIup2uW7-RG6ZEJPpJT68XkXkscPkmy3_yIUx3YG4Ag6bb1_B10Czq6lKLdQP8Q2Z-AuJDdHaZCtJZnZSgukvuT4CQ6TUl4yKCVSiWsM6zQ9YgJ0z57ibDBcFyO4r0sBSWCU-rbljdQllEXFT6aW3mFO1hphLxQgPF3K5WkA2X2QLzEJ9WzwFd5bFDO7NonsbzRssBzm-tSjTw3q-uKCwv7t5NbShTeo",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAWafSPffJ7RnIY3PedvmyIPCr4eLRNLGgoTr3AaAlaotk6-pYDjDflaBDHD-yermFERdZvbx3K_gaNrbgO1IacEndTZmiajniOnOj-ogIS9CVcFBiQ4DLVSerLe7Ziz2Rz1k87tFYNU_8WukiRGZwuJ-16kyn-ooPmxaZDTsuLHv4G4QOvVkCYLAQLBUjdtIdsBMbH4mVa8LnBZrgSJ14WLaSsrxNjkxOh0MFwwUrk5OkrB30N0Y2n0LErb-55lnF14wYMYarYL98"
    ],
    description: "Forged in the oil-stained depths of custom car culture, the Highway Magician Signature Trucker is more than just headwear—it's a tribute to the 'built not bought' philosophy. Inspired by early 2000s streetwear and vintage speed shop aesthetics, this hat features our iconic Winged Piston insignia. Designed for those who live fast and leave a mark.",
    specs: [
      "Heavyweight Cotton Twill Front",
      "Breathable Polyester Mesh Back",
      "Adjustable Snapback Closure",
      "High-Density 3D Embroidery",
      "Custom Internal Taping"
    ],
    status: "New Drop",
    sizes: ["OSFA"]
  },
  {
    id: "sun-faded-garage-hoodie",
    name: "Sun-Faded Garage Hoodie",
    price: 1650000,
    category: "Vintage Hoodies",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQ5irU6O5kNwadXJyZA1uWlpA6lMvICSpph9LZEgha7lUucs3mLDEKYJ4-_WmegnUJGCxYAm7yRAGxFqAlHb33j-Y9ncvL59Y5IOxJnSYf25KLUdJa9vdy1n0XGZdkNNsBtInJBQC7qY7VBGwqYL0tAlt5YppNuNHkWr_rXs_HpwkUgSBWRA3l_f0iNoA7C5Y8D2qXC1uMni8ITiciw50pJxvXsUkrLHmh6tEG-LJDxoRGzEY8UAIjmGprpr8sdM4voed5t8fqyrA",
    description: "Close up detail of a vintage-washed charcoal grey heavyweight hoodie. The fabric has a distressed, worn-in texture. A large, cracked-ink orange graphic of a winged piston is centered on the chest. The lighting is harsh and dramatic, mimicking an industrial workshop environment with deep shadows.",
    specs: [
      "450GSM Heavyweight cotton",
      "Vintage wash finish",
      "Ribbed cuffs and waistband",
      "Oversized double-lined hood"
    ],
    status: "Best Seller",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "route-66-trucker-olive",
    name: "Route 66 Trucker / Olive",
    price: 675000,
    category: "Trucker Hats",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBStvGH54kFY0Xe_Tcf0dkpdAZRo6HmilSFVJRvDhR-xTEBImaC7iSnfCoUBiQHFagnQXJO4kuYB0_yl-qnWLe0HBUquciDTXt_gCl2ZiWPOSvTnjstN1X-8u610Gr_L8cdTKtwV1rQKoDEoB-PIJPba7l7ZpXTBJ3AUMEcdObZ7CKL8Ap7lh40nHTcc43yuf1O3o6ve949wNfXTPzfOpL0pXrdlYP6_DdGHXZ1QBnKJE31WOx_es2tRCBokUokZWr7Wb_Qzv2Hisc",
    description: "A front view of a distressed olive green trucker hat with a white mesh back. A bold black and orange circular patch with a piston design is stitched onto the front. The hat is shot against a textured metal backdrop, creating a rugged streetwear vibe.",
    specs: [
      "Adjustable snapback",
      "Contrast stitching",
      "Durable mesh side panels",
      "Curved vintage brim"
    ],
    sizes: ["OSFA"]
  },
  {
    id: "engine-block-box-tee",
    name: "Engine Block Box Tee",
    price: 825000,
    category: "Graphic Tees",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCqMmydzSkx5oLySPzSTVtkt72fnClnMigha7wQ-X1Yhuf2FfLxoWbfrfsM230V2HalDnhw7edWJyKoOiU9StiNw8hO2fwu4bGqCUUSh0HZJxHE0imbnrP-P9CIjdU9DF9Xp2eB2Sso7ywtmDU7kQx8LwB5c-S_VC7yKBukJwAu7k_k1Vz6bMAjPkcemMIfkS-gEWZJ2whe0HR9Bg7C6K2LlaMWDcmU_CxbKn-3y80s8P76JxTXOQagTiHqSOfgDPJpwqpcFxTZ5k",
    description: "A stylish black hoodie featuring an oversized white and orange print on the back of a vintage hot rod engine with flames. The style is aggressive and high-contrast, fitting the 'garage-built' brand aesthetic.",
    specs: [
      "280GSM Single jersey",
      "Puff-print custom engine graphics",
      "Drop shoulder boxy silhouette",
      "Thick neck collar lining"
    ],
    status: "Limited",
    sizes: ["M", "L", "XL"]
  },
  {
    id: "service-station-zip-up",
    name: "Service Station Zip-Up",
    price: 1875000,
    category: "Vintage Hoodies",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmbUKP7fcPcLt4_Tm9N7nEJzMuJmXCNYGbjKrG7Kqe25GLm2vyF6OzUnBceubQ8N9tmZij0IUHNgFqfGLtD8mCGTfYZ9M5EV6j6LBapxotknv8-cEpw98UT4Ixw6Kf2SE_2oP8VVrzLvNBTdbylfmv9DuoghkGYNvpmr0VJGknSIvkEJLy4Xzoz4KcMYewGvMfPqMBKv4_V5NeEsQxDV4rjgNPnRbU_Nu3nQ29EwDNhM47hucbL2ZXM7CPdOgEj4IJZi8kB3tN4lQ",
    description: "A detailed look at a faded blue vintage-style zip-up hoodie. The metal zipper is chunky and worn. The elbows feature reinforced quilted patches. A small embroidered orange bolt icon is on the wrist. French Terry fabric designed for long-lasting utility.",
    specs: [
      "Heavy French Terry construction",
      "Industrial grade double zip-closure",
      "Reinforced quilted elbow pads",
      "Thick ribbed cuffs and waistband"
    ],
    sizes: ["M", "L", "XL"]
  },
  {
    id: "shop-floor-keychain",
    name: "Shop Floor Keychain",
    price: 375000,
    category: "Kustom",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDkJ2U48j1axzp8H1uIIzWe8Mfj_td227_--PrgxL_x06ftYx6XTeWuJ52okHiiyQT0i7Mrh_n4_-KNe0fdvckt3CzZb9DbblqZ9myeTEk-gH0894yMv6O8_-qYJXGA-q6W_AJ_hJ5SnJPTohvytChqCnTt0mO1sDvs2YAcb3Mh9BdDUOvVbl2ibb0udhsV2nNEoWMGmbCdV681ZkDtF6BwkA1vXW5JW6Kp37-TdslBNZPAx3vpoGLsIuqn47rzUvDQhtGO-WR5xU",
    description: "A close up of a heavy-duty chrome wrench keychain with a small orange leather tag embossed with the Highway Magician logo. Built to last in custom-cast zinc alloy, this is a premium hardware accent.",
    specs: [
      "Cast zinc alloy wrench miniature",
      "Genuine leather tag detailing",
      "Embossed hot rod orange branding",
      "Heavy gauge steel keyring clasp"
    ],
    sizes: ["OS"]
  },
  {
    id: "skull-wing-tee",
    name: "Skull Wing Tee",
    price: 525000,
    category: "Graphic Tees",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNrPk-k62rGp1IL8LmWruXvdfxxPUGTK4C0mYDy7RZd97wXQNb3v2KNmQ1u1IAF8Eem9pQ5qhNfzkXWqa_UkGoV-iEtbOtjASNjx7gXQF7p98tMb92ccYxkrOiflr5-x5jq-IkVaPcnH7VzZzDRHJplWoFZpEj_h4YMbn2d1N8pcw3EXI-h-jt3NdN3rsMuTG7xHSU1_NjQOH-kFSMAvd9RfqIVjUSu0l1cPqZlD3hZuFTbrSDAM51ENr8NsW1kw5ZJXvTBomBltQ",
    hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCc9H9lqz0S-iVEwHhzcwiLJz05TnN5PxJXl6jpatkNytJ-1DymSsVMDZLCVtNXTTbfn6Pc2P6zi25JAX2AZdAt-Swhdudwl2vph7OkVUwFIxx0b_2dog2A9KnUzjdmlpjP3lrruNd9hHLUygu2d-4CfnBZmgRWVsTv8S_b1EaKDJu9DoawYTNwUIK-fdiwW2RLyVf44h8KQH7-zICaDF_41f9DwIrVMSxqGY1_NY35hhQqSRLj8OCKjeJbGTsJ4OvEBOpvwydnD5Y",
    description: "Classic oversized graphic t-shirt. The chest contains a clean typographic signature while the back reveals a massive detailed skull wing icon. Features double-sided styling for full impact.",
    specs: [
      "240GSM heavyweight cotton jersey",
      "Dual screen-printed graphics",
      "Comfort boxy fit",
      "Carbon-washed distressed look"
    ],
    sizes: ["M", "L", "XL"]
  },
  {
    id: "tiger-spirit-tee",
    name: "Tiger Spirit Tee",
    price: 600000,
    category: "Graphic Tees",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3MRvBCflwFEbSzF-TsTI1iSZVVYbWh4bij2qWqjPJMIKwfNjF__apEV5-8zN2gjbZTFw1eSOfUtVvIYa5x1QsZQautw5Bazi_tbaGAP5s6t7BCkELWfgl64F-q5p8D12xo5dTJfw2Oy10UwU6VKFc3e2XJFrX-r6LlihOaJEf7pEWT7Ar8I7Bp83A85EuLkKR3NXeQ0O2WGDe-PamsR-FoI9K0iAkvlayEujJvDlRqxemxCDAQlTlaOiQN22qsyml6XkMvn9fiXc",
    hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcdIrfDC_9NKnk__wNTwm0MvxbQcaZHWguTs1lkiJe842uS1jM8C0uTRdsMqq3aIPKL2-z07gWWLVzT5raDwg-ydr-FcG7rblE0cDABDsnpWpQDjEo6C-rAzqZbRisH2fEV4ELzjWIjOBGUN9G4SzWqvSivOPs37QmS2-j911rckYrroiX0arEsFXKkcf3hqw9prdrAqQ1a9VsUNXh3xRN3Mi8Llrhle2fZD9q2mUuEqNtuepCxneBM_JCDvjmu_ZubYJwADRAcMU",
    description: "Premium heavy cotton t-shirt with a detailed custom tiger spirit print on the back and brand logo on the chest. Designed to stand out in early 2000s streetwear style.",
    specs: [
      "240GSM cotton single jersey",
      "High density graphic print overlay",
      "Ribbed crewneck collar",
      "Reinforced double stitching"
    ],
    sizes: ["M", "L", "XL"]
  },
  {
    id: "magician-script-tee",
    name: "Magician Script Tee",
    price: 570000,
    category: "Graphic Tees",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYDconXLetiyUbyCT98BYUsxZLz5zSv0Cajm3yTlUoZmqqlVoi03_yQIo3V18qMSM82dd9SCrMgYzDJLB_LuQ2SAhVzDFhJCrjeAxmfw2LPy8X0pZl8Y9wFAAodgqkdeJlBjOyNlBIlr6_Umc7gMRgNu6hV3Uy2dd0bsXkLT6HnRuzuBfhP1Ht5mV5XKrnVLLDltdjKWiLnfO2dBI1T2EBOXyZ2pv5gpzO6jrmOYJvoIYkLKIokfY8SCI-YL6JzrDDYrYye0x_TLU",
    hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuArPcNlZMSAu3g1L9wg13inRTr5oeGvXDCMagHbU06ilv0chC2jiv72bVc_fJUFq_xKoynjw02K9p34Is6g4k9Ys-Zq-AzOZTYf5fg-ze_-wRYOq6xBScsP6Zm6aaeciSC7fMiiOuIqtkKF5qtYsztk2RbyBQc4BwIGw0WQ9DUNygSs9GoUHuqieKj4YmfqKtGMeyD5ZNv0yNCpnWgiJVqZDfOmjUDKaaXwx_FY2X_FJFOLQO_soTEGusFp7_A_ahNL2hp4jDLm_u0",
    description: "Highway Magician arched script tee. A minimal typographic front chest treatment with a heavy high-density back print highlighting the convoy script logo.",
    specs: [
      "100% Ring-spun cotton",
      "Soft wash carbon dye treatment",
      "Breathable screen-printed ink",
      "Standard streetwear relaxed fit"
    ],
    sizes: ["M", "L", "XL"]
  },
  {
    id: "crossbones-garage-tee",
    name: "Crossbones Garage Tee",
    price: 630000,
    category: "Graphic Tees",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2gTsbAq6CpRB57GQufEtTxglUxM0imuRy-LPFGcggqc8LF94zfGMsfE7okhl4OQW7sficWRC76-5Ln6kQLflLc13nF4_sjDBU6A4DLji1XyXMIDtgMyvTue_Ry2hZUDhv6KDv9c_yn5JeXAYxl4WQgXVNx9gklga71jxWu5bpWAm3_i8NA6npdv6Ud5DMbvHUEt449_mAixNh1xRZ7YY4EIWiRQSpFqtFJyG7ZdKSHIy4TPh8UtW13_LcANGW7FXL_wkb4cbYlaE",
    hoverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuChxcbNv_clRTEuBA8bGUiEMikkUaG2GS4JEmuBKzhHtaRkjSvspruFwF_2idrSuGFOuBk4GlC8_HmIocowYLjBCyHCtmdNkKT3qw95YIIgatbh6pyucV8E7XwhYPAtZcA-oMMQKWASQwA9ZIcchhIbHBmXLlFufdZAyIxiznV0LeFqltK46vG2YGlSXSNuJ8B6Rw9UefQ5Mhj2Qv26C8lf1rL8nEA98SELjvY5G2KLGg08mMZJe3O_8coFa-MCFIPn5Qwjm3IPy7M",
    description: "Industrial shield crossbones graphics. Perfect streetwear essential for custom car culture fans, crafted with heavy cotton jersey fabric for ultimate longevity.",
    specs: [
      "240GSM heavyweight cotton jersey",
      "Puff print crossbones detailing",
      "Ribbed mock neck trim",
      "Vintage pre-washed charcoal shade"
    ],
    sizes: ["M", "L", "XL"]
  },
  {
    id: "custom-teal-tote",
    name: "Custom Teal Tote",
    price: 675000,
    category: "Kustom",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuARNbnGLDC9nyIGQXfjet3ztq_RdwqJmsvVY3r1hWRqZbrolZJ9lihEeIRi-YurZkE8te81Ps_-jmOCrhMFC1N-oeWqsAlwwemdn9AB1z9C_NBS8XVvXlXg7EbA7QK_sKhiGVmMmbVCMbiDpoXBrJPxZE0xRzook9wB-L8a57jGcO_gFO2kVRa9XA2O2CGN5bhEqC7ftLANB_4gBtcYLAW6xbbzS_tCsFh_1Ns5_lmD8UqtLCdfYd_ParOwS9oeS6C259JGAcaz7Cc",
    description: "A pair of high-contrast streetwear graphics on a heavy canvas tote bag. The design features industrial typography and chrome teal accents. A rugged, 'garage-built' bag for tools or urban travel.",
    specs: [
      "16oz Heavyweight cotton canvas",
      "Double reinforced shoulder handles",
      "Chrome teal industrial silkscreen print",
      "Interior zip wallet pocket"
    ],
    sizes: ["OSFA"]
  },
  {
    id: "logo-slap-pack",
    name: "Logo Slap Pack",
    price: 225000,
    category: "Kustom",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVns3K7Yz_GEc8ndXbA1mNT-mDXDlMftrgi2dYmuCdXavdsZYUubNnt0j538aNMR-Zv6gf2vcEEnTJa2i2HlSZ4biRJ8q0zQu9wtZp3cm3m2I9r71lRnAhvcEJ7jrOc038kKzsI6SKLul667emK0FFTBWU9AXDb1qz2LZIQ0Qzcl3j8M3HBj1zl1JEcA28gjMVlzjyZVfZazO_B4oOUQrs-w1KyzykTzwS0g8pPq2ETeWxzISI3InpPeB7PHPg9MRcoV-ydkIntxE",
    description: "A set of vintage-style mechanic's vinyl stickers with distressed textures and bold orange and teal colors. The stickers depict eyes, pistons, and bolt lightning icons. Heavyweight weather-proof vinyl.",
    specs: [
      "Set of 10 unique die-cut stickers",
      "Thick weatherproof 3M vinyl adhesive",
      "Distressed garage-themed graphics",
      "Perfect for toolboxes, helmets, laptops"
    ],
    sizes: ["OS"]
  },
  {
    id: "custom-skull-tee",
    name: "Custom Skull Tee",
    price: 525000,
    category: "Graphic Tees",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpfxKTDQE61AQHLdFRSCMPMOHcqfUa57y35cbzdVRIvrgA0sgkwQTm7SOB29xyq1o8qluV_UAdnwJrVSqx_DNevUdFqKmhcdlDq7UlMHrt7aNT7Q5xhyEZeKxuzdwak8ugNgm3LKs0xXQFIkJ3QwxdJzMtSmLRQgUkcCjzXh1KxbY1EVa438O4m-joCQojWHOJdA49oFr41notZLuircjeHgh1PivjcW1agKR239a3zRpb4YqH57tT1jjX5nG5avFg-LNljizecY8",
    description: "100% Heavyweight Cotton, screen-printed graphic tee. A brutalist skull alignment on raw washed canvas weave.",
    specs: [
      "240GSM cotton single jersey",
      "High density graphic print overlay",
      "Comfort boxy fit",
      "Reinforced rib lining"
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "ride-or-die-hoodie",
    name: "Ride or Die Hoodie",
    price: 975000,
    category: "Vintage Hoodies",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6CAdSbBWZbqZ8BpVF4mdA-r9jWWfJJmO1CwK0lumKSgTkWpkiP9BJ_NxiXwtZVq4N-QUD31kezdy024QJMEz7ttSg1A2FYIuQq0MpTjTpxI4aTx4qBa9CoKXK6BVDEdtzyc9irTFP6Aom80u_YTfMn7K3k1avvnjgbgApZFd5jEZyRU4qBxzlOdkoOif4_uQE-h6M5kaPaEmSTnuqQqzUXtjJGFCEun3uqLDwTUnej5yHvY22WDX1OqVUzRDKA5VuWo2iIP1LJFg",
    description: "Premium heavy brushed fleece with distressed 'Ride or Die' graphics centered on the front pocket. Engineered for maximum thermal comfort and road wear.",
    specs: [
      "400GSM Heavyweight cotton",
      "Oversized double-lined hood",
      "Distressed ride or die print styling",
      "Chunky elastic cuffs"
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "piston-graphic-tee",
    name: "Piston Graphic Tee",
    price: 600000,
    category: "Graphic Tees",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcrmjPv59oxRLCt79KV5gm-KvQOcIykFJ2WEASx7hENsS68YDkQJP8WQ-tDpi3AQvyZxl5HNBXo5w-KGc3GeG1DSbjWjYztrEJeP7q14s_dglKkZo35tPO_GhCVgO5FI--jWryjqzUEProFzP9A7noXSp_nVq250gi6LlgoaFFK8KNqqfudp2SXXDcBeqDl61s5M3kblSwzCO8BJrMjO0D38Z1pyc7jl6DDx8rlxGBqmvOuSigP8xMCRBQ0TXNM9MZGgS-mcy6ajk",
    description: "Vintage wash short sleeve tee with soft-touch cracked ink piston graphic across the chest. Built for high-speed style.",
    specs: [
      "100% Ring-spun cotton",
      "Soft wash carbon dye treatment",
      "Standard relaxed streetwear fit"
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "magician-logo-tee",
    name: "Magician Logo Tee",
    price: 570000,
    category: "Graphic Tees",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2QIQrU1CTfAPTK8WEZXY1fPNNTfrHoV1cjyA-R3a9ch9HXhGlxywERKvYG4LI7eHnXVbmGt0T-v5lvJkpF3_ZF7TbKZEctmteGHMEKs4ufdRNwU8tWHywzv_DBM-rJpXe37wdjeuUkYTAGryYaSeTPgug_7FAbHhkxQAadxwBwQAyBIEilSRNQrVAL4k3vDxE5NQ2QZNowtMEPMnq7Q3zoQk89RWDBgOt42fwVOTt1vvSNMAUVLE-Iobij92-CQ0OE_BkAJoT-Kw",
    description: "Classic streetwear fit, durable double needle construction featuring the original signature brand typography.",
    specs: [
      "240GSM cotton single jersey",
      "High density graphic print overlay",
      "Double needle stitched hem"
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "kustom-piston-tee",
    name: "Kustom Piston Tee",
    price: 630000,
    category: "Kustom",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPWgGSdOhzYgb0GuUuHomXPLhcQ-LlxaRn9dKSMXNUJppFS0LGMXtOErbRTs_xCurY7I9LPv_13Z7m7IRpgqFvCw5ocU1wiqRxEDg9OxyYNZU987aLDXIAuBm_G_RDuHpQL86rf0saEb-_PRvkrv2BpmYP01b0pD98yWYoD9YXXkS_XqSqLycQ7iYol994IgBUKEDee6lb6aXUnw8crUGtei9E7jZKPRpcACZxO_0XWdEKsJGNhzZNNBsRihvmPEmZgF3ZD49qkes",
    description: "Limited edition garage series print in bright chrome teal. Highly exclusive and collectible.",
    specs: [
      "100% Ring-spun cotton",
      "Soft wash carbon dye treatment",
      "High density screen print detailing"
    ],
    sizes: ["M", "L", "XL"]
  },
  {
    id: "speed-soul-tee",
    name: "Speed & Soul Tee",
    price: 525000,
    category: "Graphic Tees",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCf0gR1tI3J_0cbSVQVvjw5UWN_gSZEPQkTSXwqqViBHVG3HYoNVzG5O8zHab_7BFxctcRC7BJcXSKi7U9IG4nB47kWcZzXF3fNjVgMhrTkhG07z0OJ3xWf5FaUtJTIptSmyB6yozoNPw_1QHJkzikgBNJQgw7S3HUUInvkC861q7wZFgeKBvHPQgTviJ1ftYX5gLwm-_xXjLysfLN0RaCbx9BJKDH3HNWrcafpG_M2ZGwL3f-qfvMgdQsl9bYNjWi2XUmxuHstdOA",
    description: "100% Organic cotton classic, featuring a back design illustrating the connection between speed, engine machinery, and the soul.",
    specs: [
      "Organic cotton certification",
      "Breathable screen print",
      "Standard relaxed fit"
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "asphalt-nomad-tee",
    name: "Asphalt Nomad Tee",
    price: 570000,
    category: "Graphic Tees",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_fabBIoGO3R5xLHGCQ1XnV7M_g3Log3dSaqXbSmAVjYDq1b7eDUBYNsRDObWfZ5-0U9Ex6uRSRmU_u12cXQLMC_b30u1OW9esosw--Rnffm89Uu1tu86uKevkOqklHvtG6rwOoh9VoMb6HI2gpytcZcuYkq-H_osU88AtRaonKWHodvVM1i_gSPjMEgu4gdgxXZVTlymp2d-S6uGUTnBoZlGNTQXLjBp9B9gMgb9Med6W7_RuFtzoH-yul5K_S5ch4Clr4u1Aaiw",
    description: "Heavyweight jersey shirt made for long highway cruises. Featuring distressed graphics of our winged badge.",
    specs: [
      "Heavyweight 240GSM jersey",
      "Vintage wash effect",
      "Double needle collar stitching"
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "garage-built-tee",
    name: "Garage Built Tee",
    price: 600000,
    category: "Graphic Tees",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwBoTuPjrwOOoOIn8iJ_Gvf5OwGOCtT8efVBK93zJ6CYU-FQ7-WL72G7jSEI2LR00rA1Du3xYpu2OWql3D4Bir6hoCuA_OCj0I-lCPQxzSmZyhdF6rPwED3HvInDfxXGngQmOBcD5xCSNT7ZcxnvBDeK5NMIcp3tong1uQ0Yd0gnTHPfkIj4O9fvOpcwhW9-cir4zYsygOtgE1yB_Ntgwx4eppjAs_3rUl6BuvWelXOHq9TY4hLNZVf79VOK8OEcaxRKJlUL6vyrQ",
    description: "Streetwear essential highlighting the 'built not bought' core philosophy. Boxy, premium styling.",
    specs: [
      "280GSM heavy cotton single jersey",
      "Relaxed fit boxy silhouette",
      "High density graphic print overlay"
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "racing-spirit-tee",
    name: "Racing Spirit Tee",
    price: 525000,
    category: "Graphic Tees",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBKwnvOyJTYIgEy0wQ-suZcn4zz6hJn8U-v5BQU0LqenRp4O9BK7iY-f1HfsBdQMpZ5ofJmJGRMbnrCAfNHe_d6Vf5mHO9qKtEp_ZAYrMmwnxvZHsBYen8wkqt7VDoCDLSiKhXjRqEErBC6xHyyfUJ33OJZ2VJxR1gwiMWmkRDIA0EbctUCMGVpiy9nCCnPF6Mwd6ibZhxXOOQjLGbrB49ejN-8zLHtBj2d1VclVsAaZFAnfMvrpIgqkbkItEtb5euR3hsms_2MkQ",
    description: "High-octane graphics commemorating the 2024 circuit runs. Built with organic combed cotton.",
    specs: [
      "Premium screen print",
      "Reinforced shoulders",
      "100% Organic cotton"
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "vintage-moto-tee",
    name: "Vintage Moto Tee",
    price: 675000,
    category: "Graphic Tees",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwt-nSUUrw0Zgms8H7Or0UYrrXVy-mXPDX72Xnwmab1fEjcVx5_A41ntYenwMyRchJllDLbmYUyv125avScFe7-bb7Pyar6tAWGWZJHYGyG1lE2AVkFOpzHSvpBPit5m9XHF39wWtPpLwHOTlvD8s_5ifT21cq85L9lWrXPQxHU7pkeQPXDy7sqOtvbbPB296uxtsiPr-tqMEwgAv1lTkun1nrB9v6lhEbVUJ3GsjpfUu5_AnK825IE_1IbL3VqinuPrJXbOS3muo",
    description: "Features a highly distressed vintage motorcycle assembly graphic. Heavily washed cotton creates an authentic retro look.",
    specs: [
      "Distressed vintage wash",
      "Oversized drop shoulder fit",
      "Double stitching at collars and hem"
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "iron-horse-tee",
    name: "Iron Horse Tee",
    price: 570000,
    category: "Graphic Tees",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVkOD3A5v0L3DomPFdEQUsro9fuiU5F0Gw8V9N7Vwb5eiO0R3p3CSBajlHXXXH5f7BZXflXFXzlITmXl3TawTas_9s9edwL5M1yhVCye9UKv0C3wUkwoVDovJLwhYA-uhSN9tztcr5u7Gk6LrBaOIKeyjtm6ucamO3qHY0fEDHCEIgZoVzty5RdKeTGRSWZ0ZKCEE_VncMC5caGg2bSPOpaiS9q0bN8ta4NprHRefZtoegxgN1Ili__W1v0rcySoMjDGWGsWo7s7E",
    description: "Rugged streetwear essential focusing on industrial steel and mechanical horse illustrations.",
    specs: [
      "Distressed vintage wash",
      "Breathable screen-printed ink",
      "Ribbed crew neck collar"
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "skull-bones-tee",
    name: "Skull & Bones Tee",
    price: 630000,
    category: "Graphic Tees",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAt9buCsa3d_3C2L9UcgfAlFN0DCwrvYMJk9zkKuNgR3cZ7c6o-A3xmUubvHyEl6odVLh09SERGOZXvnlyYHtBgcF1OL_qEjsJzWJL9HDpANqEXOPskAhbIuhjzFrCkrMwfRVXa68VEC4XwYrNedXF_kiAnDa5Y6aArtRtQpZS2d8jlLoOhecTRiFF16jxh74yB4rIS3Oc3vcEN7oPL75o2MMT2k2hltquEyLyHbl7LQSlpyDvXH4RMPhYmUBpx7wWBmyF1Fe0woug",
    description: "High density puff graphic detailing featuring detailed bones layout on a soft wash pre-shrunk charcoal tee.",
    specs: [
      "Carbon wash finish",
      "Heavy puff screen-printing on back",
      "Mock neck collar lining"
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "midnight-rider-tee",
    name: "Midnight Rider Tee",
    price: 600000,
    category: "Graphic Tees",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZEm6BcNm0Xma16Lo2Yaxb6S9MpHE71FnU_UmrGzXfVofgwdB8PBr6vAq3bY_5seAUtnCEjOYasaQJdaTz1AFOLWf37d0pbT2U_pd2nnemVlp4eRQf7zcAsdb-hgbaORCUoV3WnKmg61NmgK4xZkuw2vSFDSZrirglReLAlHChUC3V8qBGS8Bd1Wdq7-gZBw7ie1FFpX-cJkPAReEhw-QhLqZt71ewZVTBAzWn0B8GPHEqr9l1awjnJOMWhcnoz15jF62np4zMd1o",
    description: "Stealth black tee highlighted by a reflective hot rod orange night-rider print. Cast in a durable combed ring-spun layout.",
    specs: [
      "Pre-shrunk premium cotton",
      "Reflective safety orange detailing",
      "Dual sleeve insignias"
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "bolt-graphic-tee",
    name: "Bolt Graphic Tee",
    price: 525000,
    category: "Graphic Tees",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbmchZy91NSRmk9KVUDb8kU5LQS8mSsXUZ_GddQ8WfDmg2kGa0pVvMPy8inLb-TyCAES5fUsNfU8fYlzuQKxEiZaI-wp9jpN5Gy64OfYHhtzDkIbXZS5tkFAC5FaarzZ1uDqDPv7Is7u_fWSWWNS7x029UzUkKopnsS3vlAoNEBseX-0GYMsxn5_HLpo0ofIAYXBATx4u8blmx8bcpKLEF6ASPGX08WvBAKjrow62yE1UkUEb6e1KQ5WR7yWJ7ZiCIyWRb53VX2sg",
    description: "Electric bolt theme overlay screen print. Delivers instant safety aesthetics and premium hardware vibe to any outfit.",
    specs: [
      "Reflective neon prints",
      "Comfort mock neck styling",
      "Heavy 240GSM jersey"
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "piston-head-tee",
    name: "Piston Head Tee",
    price: 570000,
    category: "Graphic Tees",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDK6V7uwD6Xj-ZRLferqQH38W6VgiW8fvhZTC0bK1-3Zf4Fl9pgHFibJx3Yec7y8owXxImpv3kWWwoH5jYyLbCoWS9raB9Y1cgeCUfpmoyouHGZVEuBOuC1H84MeDi9tQVnBWdMDCTOKcDKiVcRwSosjl4Zbd6I23-MIe2L9n5fygQ_DQ0fB-Fg4pc5D0GmyMWp_dMuCk3nvkDdEvhA9eHxbrcCLoK6PX5ilyamKkuCEJLuaO0OK9-89KJrs2mCIoxgb47xVyisf2o",
    description: "High-contrast geometric technical print showing cross-sections of a custom-built motor assembly.",
    specs: [
      "Screen-printed chest insignia",
      "Comfort streetwear fit",
      "Soft pre-shrunk cotton"
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "magician-v2-tee",
    name: "Magician V2 Tee",
    price: 675000,
    category: "Graphic Tees",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFZxvWZqwXeCrUcP9plXsSHjmwuzhp4o0hiJHc8a8RVOimtrxjrFbE-7HFiRcCsMGg8K_FbmSjwk4AdLi5syxWblQ83mFUJRfCDl56_SSISHDWbUelMquqKt3EmDPUNLM-KkmL2I-uFPu_Fs0z46Pg7nm21d0cn-IjWeoXNO8vlMXpXfFj_I5o8YhEZUpyXTBbRkzsHbC7Rh14hMW2MuIH-i5_8hQFGMKBZ0O3D9vj6P_hcS0AfrYTIJzxnEl1mS_intnDVObJLwk",
    description: "The next evolution of the classic Highway Magician script, printed using premium high-density puff ink for tactile depth.",
    specs: [
      "High-density puff ink",
      "Relaxed oversized cut",
      "Raw hem details"
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "piston-core-tee",
    name: "Piston Core Tee",
    price: 570000,
    category: "Graphic Tees",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDum8jADCDkjpYIv2f0UosnDtVE7v-TtqpIP5c6ieVN0ndK6Vagudm1rJV42bYc8JyaOtmoSxRaYmlEB80AU9F1Z4WPZxb3GO8kbzvKpXejaaeh_zoF77Ft7h4zZP25TIxh8Qmw7lp9jg_o5NWBT3pSa8cx2OMrbLihS0RRUrijMnziE7scSEcn6YIylAhtWfudut76JlhVEr5Hpe3nmGv_2qe-G3NbXw9iRLoaTEFNrHkB4DZ9CSyh5P1v29L0F5hsU_JgnxpI_O8",
    description: "A minimalist heavy cotton black t-shirt featuring a small 'Highway Magician' piston logo on the left chest in reflective orange. Embodying a high-octane streetwear aesthetic.",
    specs: [
      "Heavyweight cotton twill construction",
      "High density safety orange embroidery",
      "Drop shoulder silhouette"
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "speed-shop-graphic",
    name: "Speed Shop Graphic Tee",
    price: 630000,
    category: "Graphic Tees",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJOOwEgpjwkY8OZCyR3oE8N4YlCB0Uj1mgnNL-cWh3isiqcIbb_xrj8jE3phMk_3UgMDx6lZeGzCeveqqtXARVDA1c78cFIBOarcopG-JKSxe4ptdGlFvrt__Fni9H1ShPvw0tmVt6PEBZiUaOAlmkoJpIYvjmKNbeqe-Sl0Pu2Ryy1TPB9OctVmBYokOLdKY3eWU4TT1oIF7OOyLbJdC21RxoRtFU_-Mk4BWke0gmmn0nz4u1Ed5qdYIS3dEiayj6-w-zLFn4pMw",
    description: "A back-print graphic tee showing a large, distressed illustration of a vintage hot rod engine with 'Highway Magician' typography in a bold script font. The colors are deep oranges, charcoal, and chrome teal.",
    specs: [
      "Intricate back screen print layout",
      "Chrome teal and neon orange details",
      "Soft wash carbon treatment"
    ],
    sizes: ["M", "L", "XL"]
  },
  {
    id: "garage-work-pants",
    name: "Garage Work Pants",
    price: 1275000,
    category: "Kustom",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxOFbtprnYtYYrFWyFzryjZ1bERy7oEXuCVscdZaxenOw1cTehnzCacorR-LnTeW8Xnfbk86pvxkjYjzh_jIUF7lCw5O1l2AjJFUP5u8mntsJn-GmNHXl8K0aQb_3fkhzgG22Za-ty10vWCb2B7B7RwYlbiT3QbSjzHHyd32eLOCL7GNx3dg_DTpEHE5tLOzBhU08OmbMUESDZjeqNvK5aWO-ds0zpfy-HgRXsajQqJcWWfkSvzUAE93RLO7nEsORYdcVSQPwbbZo",
    description: "A pair of heavy-duty black work pants with subtle orange stitching and a 'Highway Magician' embroidered tag on the back pocket. Built for ultimate utility in the garage and on the track.",
    specs: [
      "Reinforced double-knee panels",
      "Heavy duty canvas weave",
      "Subtle hot rod orange stitching",
      "Convenient utility loop"
    ],
    sizes: ["28", "30", "32", "34", "36"]
  },
  {
    id: "pro-tool-roll",
    name: "Pro Tool Roll",
    price: 825000,
    category: "Kustom",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuticLL4Zb1c7as5-2IOtqRfTzF-2Cxh-OIw1RVI3gDnw3ybUPnq7YH3w5YQPVmT4-Z5OasDhQcf-wXICZtPJhjrZmT3HRkJSWk3xU5UTAWR65iezzYbzvi7N4lcKrBHG0r06yRLlx7N74N6HbD99sJ65eFDdf_9Z_PKVbNqdLUi1BvcKd1Kh8GtPichPYiImz-nr5-CReXngtnEEIlB-Y0i_W1OuZE4IbRlnNOe5RncuoEauXUzuPhCmHv4HtLqC4DcTNSfSm2H0",
    description: "A high-quality canvas tool roll in charcoal grey with orange 'Highway Magician' branding. A perfect hardware accent to hold wrenches, drivers, and sockets on the go.",
    specs: [
      "16oz Heavy waxed canvas",
      "Genuine leather securing strap",
      "12 individual socket & wrench slots",
      "Custom brand metal studs"
    ],
    sizes: ["OSFA"]
  },
  {
    id: "piston-wing-hoodie",
    name: "Piston Wing Hoodie",
    price: 1800000,
    category: "Vintage Hoodies",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtF-TIcCMNuVRBFpEw0JXZRSDLLYrAfA1kcYgEYUFwA2mp8PqtFU4FIJNGYv-nrW_ntycv16eModpTlLdoOsKpgwkI_mwvGYYHMX5oZAoQE_CWezXrl7_pajhs9NMUZOewLcLaXI-8Nrtw_YcjMrs4MlMffUQ5gW59U7AM__QsMa04nyBRuGk7ViUW7xVROLP9LT_wnOqDbD4JFg_9qqJO65x7lU5UjpyWxNx2gQZDm_EGeq9Vl9ejYnz57pYc1K83IwMxsSU6NWU",
    description: "Heavyweight black cotton hoodie showcasing a large vibrant orange graphic of a winged piston on the back. A premium streetwear piece with high-contrast, edgy aesthetic.",
    specs: [
      "Heavyweight 450GSM organic cotton",
      "Tactile orange puff back graphic",
      "Kangaroo front pouch pocket",
      "Double layer hood lining"
    ],
    sizes: ["S", "M", "L", "XL"]
  }
];
