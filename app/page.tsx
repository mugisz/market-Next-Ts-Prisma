import {
  Container,
  Filters,
  ProductCard,
  Title,
  TopBar,
} from "@/components/shared";
import { ProductGroupList } from "@/components/shared/products-group-list";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All categories" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="pb-14 mt-8">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-32">
              <ProductGroupList
                title="Pizza"
                categoryId={1}
                products={[
                  {
                    id: "1",
                    name: "Diabolla",
                    imageUrl: "",
                    price: 330,
                    item: [{ price: 330 }],
                  },
                  {
                    id: "2",
                    name: "Diabolla",
                    imageUrl: "",
                    price: 330,
                    item: [{ price: 330 }],
                  },
                  {
                    id: "3",
                    name: "Diabolla",
                    imageUrl: "",
                    price: 330,
                    item: [{ price: 330 }],
                  },
                  {
                    id: "4",
                    name: "Diabolla",
                    imageUrl: "",
                    price: 330,
                    item: [{ price: 330 }],
                  },
                  {
                    id: "5",
                    name: "Diabolla",
                    imageUrl: "",
                    price: 330,
                    item: [{ price: 330 }],
                  },
                ]}
              />
              <ProductGroupList
                title="Combo"
                categoryId={2}
                products={[
                  {
                    id: "11",
                    name: "Diabolla",
                    imageUrl: "",
                    price: 330,
                    item: [{ price: 330 }],
                  },
                  {
                    id: "6",
                    name: "Diabolla",
                    imageUrl: "",
                    price: 330,
                    item: [{ price: 330 }],
                  },
                  {
                    id: "7",
                    name: "Diabolla",
                    imageUrl: "",
                    price: 330,
                    item: [{ price: 330 }],
                  },
                  {
                    id: "8",
                    name: "Diabolla",
                    imageUrl: "",
                    price: 330,
                    item: [{ price: 330 }],
                  },
                  {
                    id: "9",
                    name: "Diabolla",
                    imageUrl: "",
                    price: 330,
                    item: [{ price: 330 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
