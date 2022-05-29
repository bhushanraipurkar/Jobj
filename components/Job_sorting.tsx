import Card from './Card'

const Job_sorting = () => {
  return (
    <div className="mt-14">
      <div className="ml-10 text-2xl lg:ml-32">All jobs</div>

      <div
        className=" my-5 mx-auto gap-y-8 sm:ml-8 sm:flex
        sm:flex-row sm:flex-wrap sm:gap-x-5 lg:ml-10 xl:ml-32
        "
      >
        <Card
          key={1}
          image="/hospital.jpg"
          title="Hospital jobs"
          subTopics={[
            'helper',
            'word boy',
            'nurse',
            'receptionist',
            'security guard',
            'velaa',
          ]}
        />
        <Card
          key={2}
          image="/General.jpg"
          title="General Store jobs"
          subTopics={[
            'helper',
            'word boy',
            'nurse',
            'receptionist',
            'security guard',
            'velaa',
          ]}
        />
        <Card
          key={3}
          image="/food.jpg"
          title="Restaurent jobs"
          subTopics={[
            'helper',
            'word boy',
            'nurse',
            'receptionist',
            'security guard',
            'velaa',
          ]}
        />
        <Card
          key={4}
          image="/Labour.jpg"
          title="Labour jobs"
          subTopics={[
            'helper',
            'word boy',
            'nurse',
            'receptionist',
            'security guard',
            'velaa',
          ]}
        />
        <Card
          key={5}
          image="/mall3.jpg"
          title="Shopping Mall jobs"
          subTopics={[
            'helper',
            'word boy',
            'nurse',
            'receptionist',
            'security guard',
            'velaa',
          ]}
        />
        <Card
          key={6}
          image="/Hotel.jpg"
          title="Hotel jobs"
          subTopics={[
            'helper',
            'word boy',
            'nurse',
            'receptionist',
            'security guard',
            'velaa',
          ]}
        />
        <Card
          key={6}
          image="/Dance.jpg"
          title="Dance Tuitor"
          subTopics={[
            'helper',
            'word boy',
            'nurse',
            'receptionist',
            'security guard',
            'velaa',
          ]}
        />
        <Card
          key={6}
          image="/Tour.jpg"
          title="Tour & Travels"
          subTopics={[
            'helper',
            'word boy',
            'nurse',
            'receptionist',
            'security guard',
            'velaa',
          ]}
        />
      </div>
    </div>
  )
}

export default Job_sorting
