from flask import Flask, render_template, jsonify, url_for

app = Flask(__name__)

# 仮のデータベースを辞書で模倣します。
page_visits = {
    "home": 0,
    "about": 0,
    "contact": 0
}

@app.route('/')
def home():
    page_visits["home"] += 1
    return render_template('backup.html')

@app.route('/about')
def about():
    page_visits["about"] += 1
    return render_template('developer_info.html')

@app.route('/contact')
def contact():
    page_visits["contact"] += 1
    return render_template('contact.html')  # contact.htmlがある場合

@app.route('/ranking')
def ranking():
    # 訪問回数で降順にソートし、ランキングを取得します。
    sorted_visits = sorted(page_visits.items(), key=lambda item: item[1], reverse=True)
    # ランキングページにランキングデータを渡してレンダリングします。
    return render_template('ranking.html', ranking=sorted_visits)

if __name__ == '__main__':
    app.run(debug=True)
