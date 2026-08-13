import dried from '../assets/dried.png'
import taste from '../assets/taste.png'
import winter from '../assets/winter.png'
import { useNavigate, useParams } from "react-router-dom";
import { Truck, Lock, Globe } from "lucide-react";
import React, { useState } from 'react';

const BlogDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const blogdetails = [
        {
            id: 1,
            image: dried,
            name: "Weight Management with Dry Fruits: A Nutritious Approach",
            brand: "Snacks",
            description: "It is known that weight loss is one of the most frequently aimed objectives, and to achieve this the individuals stick to very strict diets and perform intense exercises. But getting to and staying at a healthy weight does not need to be damaging to the body. Another approach that can be taken and followed as a remedy to manage weight; is taking dry fruits that can be taken in different forms. It is now time to check how dry fruits can support weight loss and offer a healthy strategy for reaching one’s objectives.",
            sections: [
                {
                    heading: "Nutrient-Rich and Calorie-Conscious",
                    text: "Most of the dry fruits are very rich in nutrients. They are loaded with vitamins, minerals, and antioxidants and can be considered as low in calorie content. For example, almonds are sources of vitamin E, magnesium and fibre all of which are essential for one's health. On the same note, walnuts are known to contain generous proportions of Omega-3 fatty acids that are helpful for the functioning of the heart and metabolism. Opting for dry fruits as a snack or foods addition will make certain that your body gets all the nutrients it requires without having to take many calories."
                },
                {
                    heading: "Satiety and Appetite Control",
                    text: "They also contain high fibre levels among other advantages that accrue to the usage of dry fruits. Fibre takes a long time to digest, thus makes you have a feeling of hunger for a longer period. By eating a large breakfast, it can help to have this feeling of fullness which in turn helps to suppress the appetite and avoid unnecessary bidding between meals. For instance, prunes are a good source of dietary fibre, as is fig. This is a signal that incorporating these dry fruits into the diet plan is effective, especially in the management of hunger especially in the middle of the day."
                },
                {
                    heading: "Metabolism Boost",
                    text: "Certain dry fruits have properties that can help boost metabolism. Almonds, for example, have been shown to increase metabolic rates, which means your body can burn calories more efficiently. Additionally, the healthy fats found in dry fruits like cashews and pistachios are essential for maintaining hormonal balance, including hormones that regulate metabolism and appetite. By integrating these dry fruits into your daily routine, you can enhance your body’s natural ability to manage weight."
                },
                {
                    heading: "Curbing Cravings",
                    text: "Cravings, especially for sugary or high-calorie foods, can derail weight management efforts. Dry fruits can be an excellent solution for satisfying sweet cravings without resorting to unhealthy snacks. Dates, for instance, are naturally sweet and can provide a satisfying alternative to processed sweets. Similarly, raisins or dried apricots can be enjoyed as a healthy snack to curb sugar cravings. By choosing dry fruits, you can enjoy a sweet treat while staying on track with your weight management goals."
                },
                {
                    heading: "Practical Tips for Including Dry Fruits in Your Diet",
                    text: <>
                        Incorporating dry fruits into your diet is simple and can be done in various ways:

                        Snacking:
                        It is also advisable to carry a small packet of mixed dry fruits such as almonds, Cashews, salted<br />
                        peanuts, etc. It can be taken as a mid-morning or mid-afternoon snack at work or anywhere you<br />
                        find yourself when you’re not in the kitchen. Looking for a spicy, crunchy snack and Nuts? Try Tong<br />
                        Garden Salted Cocktail Nuts and Salted Pistachios Can! Perfect for any occasion, they’re sure to<br />
                        add a kick to your day. Grab yours now and enjoy the flavor!<br />

                        Meal Enhancements:
                        The chopped dry fruits can be eaten with breakfast cereals, yogurt, or salads. It also increases the<br />
                        taste of the meals and the nutritional value of the foods in an amazing way.<br />

                        Portion Control:
                        In spite of the fact that they are a bit fructose, dry fruits are packed with calories. Several meals <br />
                        taken in moderate proportions to prevent overwhelming the organs of digestion. Well, a <br />
                        serving of nuts, or a serving size, can be estimated to be about an ounce or a small handful of <br />
                        nuts.<br />

                        Combination with Other Foods:
                        It is advisable to combine dry fruits with fresh fruits, vegetables, or whole grains in order to come <br />
                        up with healthy meals or snacks.<br />

                        Being overweight or obese is not a simple event in life and is not a one-time process of losing weight and then keeping it off. It is all about the choices that you make with your food. Thus, it can be stated that dry fruits are calorie-controlling, nutrient-packed, and tasty for weight loss. These foods aid in controlling hunger, metabolism and also help in eradicating cravings hence adding them to the diet is advisable. By making a spot of these dry fruits in your ever-busy schedule of managing your weight, you will be in a position to enjoy the following health benefits. That is why, concerned weight loss is not only about cutting down the portion size but also choosing the foods that are actually good for your body. Thus, if you incorporate dry fruits into your diet, you are set for a healthy and tasty trip to a new slimmer you.

                        Elevate your snacking with Tong Garden's Premium Nuts. From almonds and cashews to pistachios and beyond, our selection offers unparalleled taste and nutrition. Try them today and indulge in the finest quality for a healthier lifestyle.
                    </>
                },
            ],
            button: "Read More...",
            date: "22/12/2025",
            author: "Richard G."
        },
        {
            id: 2,
            image: taste,
            name: "Weight Management with Dry Fruits: A Nutritious Approach",
            brand: "Chips",
            description: "Snacks are an integral part of any party. In fact, tasty appetizers can be the most popular part of the gathering. Guests would definitely love to be offered with something interesting to eat before the main meal arrives. Also, they always look to have lots of little bites and samples of all the wonderful snacks without commuting to just one only. Snacks can help you to make your guests feel satisfied and keep the party running merrily. Snacks like wasabi-coated green peas, salted pistachios, onion garlic broad beans, chilli broad beans, salted almonds, salted cashews, salted almonds, salted peanuts, and so on, have always been everyone’s favorite. If you are also searching for mouth-watering and healthy party snack options, then Tong Garden is the final destination of your search.",
            sections: [
                {
                    heading: "Party snacks",
                    text: "Party snacks contain tree nuts, peanuts, soybeans, dairy, gluten, and sesame seeds. It also has the goodness and sweetness of broad beans and green peas. This party snack is very popular for cocktail parties, even during the festive season. Make sure to stock up on a few packets of party snacks when arranging cocktail parties with your friends and family. This will definitely add five stars to your cocktail party and will create a massive hit among your friends and family as well."
                },
                {
                    heading: "Broad beans",
                    text: "A mixture of dried ingredients that contains broad beans, palm oil, iodised salt, peanuts, tree nuts, and sesame seeds, which are finally topped up with the current amount of spices. This makes the perfect combination of an interesting cocktail party with tasty party snacks. You can choose salted, spicy, sweet, or barbeque broad beans online through Tong Garden's official website. You can also add some slices of onions and green chilies to add extra heat to your party snacks."
                },
                {
                    heading: "Wasabi-coated green peas",
                    text: "This product from Tong Garden is a bit spicy, tangy, and tasty at the same time. It will not only satisfy your taste buds but will also satisfy your heart as well. The irresistible taste of soya sauce, palm oil, refined wheat flour, and glutinous rice flour that you always die for is just a click away. Grab our bestselling wasabi coated green peas that will add additional stars and fun to your cock-tail and mock-tail party. If you are looking for delicious snacks for a cocktail or a mocktail party, then choose Tong Garden. "
                },
                {
                    heading: "Mexican-style peanuts",
                    text: "Looking for a healthy or quick pick-me-up snack for an afternoon? Salted and Mexican peanuts can be the best options to satisfy your tangy snack cravings. The Mexican style peanuts from Tong Garden would definitely satisfy your taste buds, which you always look for while having appetizers or cocktail drinks. Instead of causing health issues, peanuts help you maintain your health and energy levels throughout the day. Kids love salted or simple peanuts, while adults may crave spicy or Mexican peanuts. Tong Garden offers both salted and spicy peanut options. Check our websites and explore mouth-watering snacks across India. We have a variety of peanut snack options available, including Thai chilli-coated peanuts, coconut-coated peanuts, garlic peanuts, spicy sesame peanuts, and many more."
                }
            ],
            button: "Read More...",
            date: "23/12/2025",
            author: "Richard G."
        },
        {
            id: 3,
            image: winter,
            brand: "Seed",
            name: "Weight Management with Dry Fruits: A Nutritious Approach",
            description: "Are you looking for the best winter snacks that are good for your health with no refined sugar, sodium and cholesterol? Look no further, try Tong Garden dry fruits. Here you will find the best quality and different types of dry fruits. Especially in winter, you must take care of your diet as it comes with various different kinds of disease hence, your immunity power must be strong enough to deal with it.",
            sections: [
                {
                    heading: "Pistachios",
                    text: "Pistachio also known as Pista is one of the most eaten dry fruits in the world as it has so many health benefits, especially in the winter season. This dry fruit is unique and sweet in taste. Also, this is tasty and high in antioxidants, oleic acid, vitamin E, copper, calcium, potassium, iron, zinc, selenium and so on. All those elements help in being warm in the winter season hence consuming Pistachios in the winter season can be effective. Furthermore, pistachios help in preventing diabetes, blood circulation problems and haemoglobin as it has anti-inflammatory properties. Shop our Tong Garden Salted Pistachios from our website or nearby stores. "
                },
                {
                    heading: "Prunes",
                    text: "Do you also experience constipation in the winter season? If yes, then simply eat prunes daily or drink one glass of prune juice every morning. This can be the best way to get relief from constipation and to feel warm in the cold.  Prunes are basically dried plums that are also known as aloo Bukhara in Urdu. This dry fruit is packed up with vitamin B6, iron and potassium which makes it a healthy option and protects the human body from diseases in the winter season. You can buy Sun Gift Sakura Plum from the tong garden website at reasonable prices. "
                },
                {
                    heading: "Walnuts",
                    text: "Walnuts look like a brain and hence this has been introduced as brain food as it is not only shaped as a brain but helps sharpen brain skills as well. Walnuts also contain fatty acids like Omega-3 which is highly essential for the fast and smooth functioning of the brain. Furthermore, it also contains fibres, minerals and vitamins that help human beings warm in the winter season. As mentioned above, they are high in omega-3 and antioxidants, it helps in reducing inflammation along with maintaining a healthy gut and lowering cancer risk. "
                },
                {
                    heading: "Almonds",
                    text: "Almonds are one of the best snacks to eat in the winter season than any other snacking options. This is because almonds are high in minerals and vitamins and can be eaten at any time whether it is morning, afternoon or evening. Furthermore, almonds are fully packed with antioxidants and don't contain cholesterol which helps in remain healthy and fit during the winter season. Almonds are also very good for hair, teeth and skin along with this, it helps in relieving constipation, heart problems and respiratory problems. If you are looking for the best quality almonds, then visit the Tong Garden website as we have various healthy snacking options for you. We have a variety of almond snack options such as Tong Garden Smoke Almonds, Tong Garden Oven Roasted Salted Almonds and Tong Garden Nutrione Baked Almonds. "
                },
                {
                    heading: "Cashews",
                    text: "Cashews also known as “Kaju” are so good for health and also help in maintaining heart health, weight loss and blood sugar control. Cashew is packed with fibre, omega-3 fatty acids and protein. It also contains various kinds of minerals, vitamins and plant compound benefits. The best thing about eating cashews is that it is delicious, hence you can get health benefits while enjoying flavours. You can get the best quality cashews from our website. We also have a variety of options such as salted cashews. Visit our website to know more about our products and offerings. "
                }
            ],
            button: "Read More...",
            date: "24/12/2025",
            author: "Richard G."
        },
    ];

    const features = [
        {
            id: 1,
            icon: <Truck size={40} strokeWidth={2} />,
            label: "Fast Delivery"
        },
        {
            id: 2,
            icon: <Lock size={40} strokeWidth={2} />,
            label: "Secure Payments"
        },
        {
            id: 3,
            icon: <Globe size={40} strokeWidth={2} />,
            label: "Global Reach"
        },
    ];

    const blog = blogdetails.find((item) => item.id === Number(id)) || blogdetails[0];

    const relatedBlogs = blogdetails.filter((item) => item.id !== blog.id);

    return (
        <>
            <div className="blogs-container">
                <h1 className="blogs-heading">
                    Blogs
                </h1>
            </div>

            <div className="blogs-fruits">
                <div className='nav-blogs-fruits'>
                    <aside className="blogs-fruits-sidebar">
                        <h2 className="blogs-h2">Related Blogs</h2>

                        <div className='blogs-related'>
                            {relatedBlogs.map((item) => (
                                <div className='related-blogs-fruits' key={item.id} onClick={() => navigate(`/blogs/${item.id}`)}>
                                    <div className='related-image'>
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <h3 className='related-h3'>
                                        {item.name}
                                    </h3>
                                    <p className='related-p'>
                                        {item.description}
                                    </p>
                                    <span className='btn-span'>
                                        Read More...
                                    </span>
                                    <div className='related-blog-meta'>
                                        <span>{item.date}</span>
                                        <span>{item.author}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </aside>

                    <div className="blogs-details">
                        <div className='nav-details'>
                            <img src={blog.image} alt={blog.name} />
                        </div>

                        <h2 className='blog-details-h2'>
                            {blog.name}
                        </h2>

                        <p className='blog-details-p'>
                            {blog.description}
                        </p>

                        {blog.sections.map((section, index) => (
                            <div className='blog-details-heading' key={index}>
                                <h3 className='blog-subheading'>
                                    {section.heading}
                                </h3>
                                <p className='blog-text'>
                                    {section.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="blogdetails-head">
                {features.map((item) => (
                    <div className="blogdetails-item" key={item.id}>
                        <span className="blogdetails-icon">{item.icon}</span>
                        <span className="blogdetails-label">{item.label}</span>
                    </div>
                ))}
            </div>
        </>
    );
}

export default BlogDetails;