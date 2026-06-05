# `dataDatadogSensitiveDataScannerStandardPattern` Submodule <a name="`dataDatadogSensitiveDataScannerStandardPattern` Submodule" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogSensitiveDataScannerStandardPattern <a name="DataDatadogSensitiveDataScannerStandardPattern" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/data-sources/sensitive_data_scanner_standard_pattern datadog_sensitive_data_scanner_standard_pattern}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_sensitive_data_scanner_standard_pattern.DataDatadogSensitiveDataScannerStandardPattern;

DataDatadogSensitiveDataScannerStandardPattern.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .filter(java.lang.String)
//  .id(java.lang.String)
//  .standardPatternId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.filter">filter</a></code> | <code>java.lang.String</code> | Filter all the Datadog standard patterns by name. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/data-sources/sensitive_data_scanner_standard_pattern#id DataDatadogSensitiveDataScannerStandardPattern#id}. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.standardPatternId">standardPatternId</a></code> | <code>java.lang.String</code> | Stable ID of the Datadog standard pattern to retrieve. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.filter"></a>

- *Type:* java.lang.String

Filter all the Datadog standard patterns by name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/data-sources/sensitive_data_scanner_standard_pattern#filter DataDatadogSensitiveDataScannerStandardPattern#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/data-sources/sensitive_data_scanner_standard_pattern#id DataDatadogSensitiveDataScannerStandardPattern#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `standardPatternId`<sup>Optional</sup> <a name="standardPatternId" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.Initializer.parameter.standardPatternId"></a>

- *Type:* java.lang.String

Stable ID of the Datadog standard pattern to retrieve.

This can be set directly to avoid Terraform configs breaking when Datadog renames a standard pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/data-sources/sensitive_data_scanner_standard_pattern#standard_pattern_id DataDatadogSensitiveDataScannerStandardPattern#standard_pattern_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.resetStandardPatternId">resetStandardPatternId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.resetId"></a>

```java
public void resetId()
```

##### `resetStandardPatternId` <a name="resetStandardPatternId" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.resetStandardPatternId"></a>

```java
public void resetStandardPatternId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogSensitiveDataScannerStandardPattern resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isConstruct"></a>

```java
import io.cdktn.providers.datadog.data_datadog_sensitive_data_scanner_standard_pattern.DataDatadogSensitiveDataScannerStandardPattern;

DataDatadogSensitiveDataScannerStandardPattern.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isTerraformElement"></a>

```java
import io.cdktn.providers.datadog.data_datadog_sensitive_data_scanner_standard_pattern.DataDatadogSensitiveDataScannerStandardPattern;

DataDatadogSensitiveDataScannerStandardPattern.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isTerraformDataSource"></a>

```java
import io.cdktn.providers.datadog.data_datadog_sensitive_data_scanner_standard_pattern.DataDatadogSensitiveDataScannerStandardPattern;

DataDatadogSensitiveDataScannerStandardPattern.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.generateConfigForImport"></a>

```java
import io.cdktn.providers.datadog.data_datadog_sensitive_data_scanner_standard_pattern.DataDatadogSensitiveDataScannerStandardPattern;

DataDatadogSensitiveDataScannerStandardPattern.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataDatadogSensitiveDataScannerStandardPattern.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataDatadogSensitiveDataScannerStandardPattern resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataDatadogSensitiveDataScannerStandardPattern to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataDatadogSensitiveDataScannerStandardPattern that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/data-sources/sensitive_data_scanner_standard_pattern#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogSensitiveDataScannerStandardPattern to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.includedKeywords">includedKeywords</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.pattern">pattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.standardPatternIdInput">standardPatternIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.standardPatternId">standardPatternId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `includedKeywords`<sup>Required</sup> <a name="includedKeywords" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.includedKeywords"></a>

```java
public java.util.List<java.lang.String> getIncludedKeywords();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `standardPatternIdInput`<sup>Optional</sup> <a name="standardPatternIdInput" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.standardPatternIdInput"></a>

```java
public java.lang.String getStandardPatternIdInput();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `standardPatternId`<sup>Required</sup> <a name="standardPatternId" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.standardPatternId"></a>

```java
public java.lang.String getStandardPatternId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPattern.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogSensitiveDataScannerStandardPatternConfig <a name="DataDatadogSensitiveDataScannerStandardPatternConfig" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.Initializer"></a>

```java
import io.cdktn.providers.datadog.data_datadog_sensitive_data_scanner_standard_pattern.DataDatadogSensitiveDataScannerStandardPatternConfig;

DataDatadogSensitiveDataScannerStandardPatternConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .filter(java.lang.String)
//  .id(java.lang.String)
//  .standardPatternId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.filter">filter</a></code> | <code>java.lang.String</code> | Filter all the Datadog standard patterns by name. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/data-sources/sensitive_data_scanner_standard_pattern#id DataDatadogSensitiveDataScannerStandardPattern#id}. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.standardPatternId">standardPatternId</a></code> | <code>java.lang.String</code> | Stable ID of the Datadog standard pattern to retrieve. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

Filter all the Datadog standard patterns by name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/data-sources/sensitive_data_scanner_standard_pattern#filter DataDatadogSensitiveDataScannerStandardPattern#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/data-sources/sensitive_data_scanner_standard_pattern#id DataDatadogSensitiveDataScannerStandardPattern#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `standardPatternId`<sup>Optional</sup> <a name="standardPatternId" id="@cdktn/provider-datadog.dataDatadogSensitiveDataScannerStandardPattern.DataDatadogSensitiveDataScannerStandardPatternConfig.property.standardPatternId"></a>

```java
public java.lang.String getStandardPatternId();
```

- *Type:* java.lang.String

Stable ID of the Datadog standard pattern to retrieve.

This can be set directly to avoid Terraform configs breaking when Datadog renames a standard pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/data-sources/sensitive_data_scanner_standard_pattern#standard_pattern_id DataDatadogSensitiveDataScannerStandardPattern#standard_pattern_id}

---



