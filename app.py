from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def profile():
    name = "Navin Kumar Bakthavatchalam"
    career_objective = "Experienced and accomplished Digital Marketing Manager with a demonstrated history of devising and executing successful marketing campaigns. Seeking a leadership role in a dynamic and growth-oriented organization where I can leverage my expertise in digital marketing strategies, team management, and data-driven decision-making to drive brand visibility, engage customers, and achieve exceptional business results. Committed to staying at the forefront of industry trends, I aim to deliver innovative solutions that create a competitive edge and contribute to the organization's continued success in the digital landscape."
    return render_template('profile.html', name=name, career_objective=career_objective)

if __name__ == '__main__':
    app.run(debug=True)
