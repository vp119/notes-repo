---
layout: default
title: Course Notes
---

# Course Notes Index

{% assign pages_by_dir = site.pages | sort: "path" | group_by: "dir" %}
{% for group in pages_by_dir %}
{% if group.name != "/" and group.name != "/assets/" %}

### {{ group.name | remove: "/" | replace: "-", " " | capitalize }}
    {% for item in group.items %}
      {% if item.name != "index.md" and item.name != "README.md" %}
- [{{ item.title | default: item.name | remove: ".md" }}]({{ item.url | relative_url }})
  {% endif %}
  {% endfor %}

  {% endif %}
  {% endfor %}